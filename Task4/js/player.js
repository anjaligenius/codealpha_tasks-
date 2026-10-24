/* ==========================================================================
   VibePlayer - Global Audio Engine & Cross-Page State Synchronizer
   ========================================================================== */

class VibeAudioPlayer {
  constructor() {
    this.audio = document.getElementById('main-audio');
    if (!this.audio) {
      this.audio = document.createElement('audio');
      this.audio.id = 'main-audio';
      this.audio.preload = 'metadata';
      document.body.appendChild(this.audio);
    }

    this.songs = window.VIBE_CATALOG ? window.VIBE_CATALOG.songs : [];
    this.currentTrackId = parseInt(localStorage.getItem('vibe_current_track_id')) || 1;
    this.isPlaying = false;
    this.isShuffle = localStorage.getItem('vibe_is_shuffle') === 'true';
    this.isRepeat = localStorage.getItem('vibe_is_repeat') === 'true';
    
    // Read user settings
    const settings = this.getSettings();
    const storedVol = localStorage.getItem('vibe_volume');
    this.volume = storedVol !== null ? parseFloat(storedVol) : (settings.defaultVolume || 0.75);
    this.isMuted = localStorage.getItem('vibe_is_muted') === 'true';
    
    // Liked songs set
    const savedLikes = localStorage.getItem('vibe_liked_ids');
    this.likedSongs = new Set(savedLikes ? JSON.parse(savedLikes) : [1, 4]);

    this.currentPlaylistQueue = [...this.songs];
    this.isDraggingSeek = false;
    this.isDraggingVolume = false;

    this.initDOMRefs();
    this.bindEvents();
    this.initPlayer();
  }

  getSettings() {
    const raw = localStorage.getItem('vibe_settings');
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { }
    }
    return {
      autoplay: true,
      defaultVolume: 0.75,
      theme: 'default',
      defaultShuffle: false,
      defaultRepeat: false,
      audioQuality: 'lossless'
    };
  }

  saveSettings(newSettings) {
    localStorage.setItem('vibe_settings', JSON.stringify(newSettings));
  }

  initDOMRefs() {
    this.playPauseBtn = document.getElementById('play-pause-btn');
    this.playIcon = document.getElementById('play-icon');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.shuffleBtn = document.getElementById('shuffle-btn');
    this.repeatBtn = document.getElementById('repeat-btn');

    this.seekSlider = document.getElementById('seek-slider');
    this.seekProgress = document.getElementById('seek-progress');
    this.seekThumb = document.getElementById('seek-thumb');
    this.currentTimeEl = document.getElementById('current-time');
    this.totalDurationEl = document.getElementById('total-duration');

    this.volumeSlider = document.getElementById('volume-slider');
    this.volumeFill = document.getElementById('volume-fill');
    this.muteBtn = document.getElementById('mute-btn');
    this.volumeIcon = document.getElementById('volume-icon');

    this.playerArt = document.getElementById('player-art');
    this.playerTitle = document.getElementById('player-title');
    this.playerArtist = document.getElementById('player-artist');
    this.likeBtn = document.getElementById('like-track-btn');
  }

  getCurrentSong() {
    return this.songs.find(s => s.id === this.currentTrackId) || this.songs[0];
  }

  initPlayer() {
    const song = this.getCurrentSong();
    if (song) {
      this.loadTrack(song.id, false);
    }
    this.setVolume(this.volume);
    if (this.shuffleBtn) this.shuffleBtn.classList.toggle('active', this.isShuffle);
    if (this.repeatBtn) this.repeatBtn.classList.toggle('active', this.isRepeat);

    // Apply saved theme
    const settings = this.getSettings();
    if (settings.theme && settings.theme !== 'default') {
      document.body.setAttribute('data-theme', settings.theme);
    }
  }

  loadTrack(songId, autoPlay = true) {
    const song = this.songs.find(s => s.id === songId) || this.songs[0];
    if (!song) return;

    this.currentTrackId = song.id;
    localStorage.setItem('vibe_current_track_id', song.id);

    this.audio.src = song.audioSrc;
    
    if (this.playerArt) this.playerArt.src = song.albumArt;
    if (this.playerTitle) {
      this.playerTitle.textContent = song.title;
      this.playerTitle.href = `album.html?id=${song.albumId || 'ethereal-horizons'}`;
    }
    if (this.playerArtist) this.playerArtist.textContent = song.artist;
    if (this.totalDurationEl) this.totalDurationEl.textContent = song.duration;
    if (this.currentTimeEl) this.currentTimeEl.textContent = "0:00";
    if (this.seekProgress) this.seekProgress.style.width = "0%";
    if (this.seekThumb) this.seekThumb.style.left = "0%";

    this.updateLikeUI();

    if (autoPlay) {
      this.playTrack();
    } else {
      this.updatePlayPauseUI(false);
    }

    this.notifyTrackChange(song);
  }

  playTrack() {
    this.audio.play().then(() => {
      this.isPlaying = true;
      this.updatePlayPauseUI(true);
      this.recordRecentlyPlayed(this.currentTrackId);
      this.notifyTrackChange(this.getCurrentSong());
    }).catch(err => {
      console.warn("Playback requires user click:", err);
      this.isPlaying = false;
      this.updatePlayPauseUI(false);
    });
  }

  pauseTrack() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayPauseUI(false);
    this.notifyTrackChange(this.getCurrentSong());
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pauseTrack();
    } else {
      this.playTrack();
    }
  }

  playNext() {
    const currentIndex = this.currentPlaylistQueue.findIndex(s => s.id === this.currentTrackId);
    let nextIndex = 0;

    if (this.isShuffle) {
      do {
        nextIndex = Math.floor(Math.random() * this.currentPlaylistQueue.length);
      } while (nextIndex === currentIndex && this.currentPlaylistQueue.length > 1);
    } else {
      nextIndex = (currentIndex + 1) % this.currentPlaylistQueue.length;
    }

    const nextSong = this.currentPlaylistQueue[nextIndex];
    if (nextSong) {
      this.loadTrack(nextSong.id, true);
      this.showToast(`Playing: ${nextSong.title}`);
    }
  }

  playPrev() {
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      this.playTrack();
      return;
    }

    const currentIndex = this.currentPlaylistQueue.findIndex(s => s.id === this.currentTrackId);
    const prevIndex = (currentIndex - 1 + this.currentPlaylistQueue.length) % this.currentPlaylistQueue.length;
    const prevSong = this.currentPlaylistQueue[prevIndex];
    if (prevSong) {
      this.loadTrack(prevSong.id, true);
      this.showToast(`Playing: ${prevSong.title}`);
    }
  }

  setQueue(songsList, startId = null) {
    if (songsList && songsList.length > 0) {
      this.currentPlaylistQueue = [...songsList];
      const targetId = startId !== null ? startId : songsList[0].id;
      this.loadTrack(targetId, true);
    }
  }

  handleSeek(percentage) {
    percentage = Math.max(0, Math.min(1, percentage));
    if (!isNaN(this.audio.duration) && this.audio.duration > 0) {
      this.audio.currentTime = percentage * this.audio.duration;
    }
    if (this.seekProgress) this.seekProgress.style.width = `${percentage * 100}%`;
    if (this.seekThumb) this.seekThumb.style.left = `${percentage * 100}%`;
  }

  setVolume(level) {
    this.volume = Math.max(0, Math.min(1, level));
    localStorage.setItem('vibe_volume', this.volume);
    this.audio.volume = this.isMuted ? 0 : this.volume;

    if (this.volumeFill) {
      this.volumeFill.style.width = `${this.isMuted ? 0 : this.volume * 100}%`;
    }

    if (this.volumeIcon) {
      if (this.isMuted || this.volume === 0) {
        this.volumeIcon.setAttribute('data-lucide', 'volume-x');
      } else if (this.volume < 0.5) {
        this.volumeIcon.setAttribute('data-lucide', 'volume-1');
      } else {
        this.volumeIcon.setAttribute('data-lucide', 'volume-2');
      }
      if (window.lucide) window.lucide.createIcons();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('vibe_is_muted', this.isMuted);
    this.setVolume(this.volume);
    this.showToast(this.isMuted ? "Audio Muted" : "Audio Unmuted");
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    localStorage.setItem('vibe_is_shuffle', this.isShuffle);
    if (this.shuffleBtn) this.shuffleBtn.classList.toggle('active', this.isShuffle);
    this.showToast(this.isShuffle ? "Shuffle On" : "Shuffle Off");
  }

  toggleRepeat() {
    this.isRepeat = !this.isRepeat;
    localStorage.setItem('vibe_is_repeat', this.isRepeat);
    if (this.repeatBtn) this.repeatBtn.classList.toggle('active', this.isRepeat);
    this.showToast(this.isRepeat ? "Repeat Current Track" : "Repeat Off");
  }

  toggleLike(songId = null) {
    const id = songId || this.currentTrackId;
    if (this.likedSongs.has(id)) {
      this.likedSongs.delete(id);
      this.showToast("Removed from Favorites");
    } else {
      this.likedSongs.add(id);
      this.showToast("Saved to Favorites ❤️");
    }
    localStorage.setItem('vibe_liked_ids', JSON.stringify([...this.likedSongs]));
    this.updateLikeUI();
  }

  updateLikeUI() {
    if (!this.likeBtn) return;
    const isLiked = this.likedSongs.has(this.currentTrackId);
    this.likeBtn.classList.toggle('liked', isLiked);
    this.likeBtn.style.color = isLiked ? '#f43f5e' : 'var(--text-dim)';
  }

  updatePlayPauseUI(playing) {
    if (!this.playIcon) return;
    if (playing) {
      this.playIcon.setAttribute('data-lucide', 'pause');
      if (this.playPauseBtn) this.playPauseBtn.setAttribute('title', 'Pause');
    } else {
      this.playIcon.setAttribute('data-lucide', 'play');
      if (this.playPauseBtn) this.playPauseBtn.setAttribute('title', 'Play');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  recordRecentlyPlayed(songId) {
    const raw = localStorage.getItem('vibe_history');
    let history = raw ? JSON.parse(raw) : [];
    // Remove if already exists so it jumps to top
    history = history.filter(item => item.songId !== songId);
    history.unshift({
      songId: songId,
      playedAt: Date.now()
    });
    // Keep max 30 items
    if (history.length > 30) history = history.slice(0, 30);
    localStorage.setItem('vibe_history', JSON.stringify(history));

    window.dispatchEvent(new CustomEvent('vibeHistoryUpdated'));
  }

  notifyTrackChange(song) {
    window.dispatchEvent(new CustomEvent('vibeTrackChange', {
      detail: { song, isPlaying: this.isPlaying, trackId: this.currentTrackId }
    }));
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (toast && toastMsg) {
      toastMsg.textContent = message;
      toast.classList.add('show');
      clearTimeout(this._toastTimeout);
      this._toastTimeout = setTimeout(() => toast.classList.remove('show'), 2600);
    }
  }

  bindEvents() {
    if (this.playPauseBtn) this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.playNext());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.playPrev());
    if (this.shuffleBtn) this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
    if (this.repeatBtn) this.repeatBtn.addEventListener('click', () => this.toggleRepeat());
    if (this.muteBtn) this.muteBtn.addEventListener('click', () => this.toggleMute());
    if (this.likeBtn) this.likeBtn.addEventListener('click', () => this.toggleLike());

    // Audio Element Callbacks
    this.audio.addEventListener('timeupdate', () => {
      if (!this.isDraggingSeek && !isNaN(this.audio.duration) && this.audio.duration > 0) {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        if (this.seekProgress) this.seekProgress.style.width = `${progress}%`;
        if (this.seekThumb) this.seekThumb.style.left = `${progress}%`;
        if (this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
      }
    });

    this.audio.addEventListener('loadedmetadata', () => {
      if (this.totalDurationEl) this.totalDurationEl.textContent = this.formatTime(this.audio.duration);
    });

    this.audio.addEventListener('ended', () => {
      if (this.isRepeat) {
        this.audio.currentTime = 0;
        this.playTrack();
      } else {
        const settings = this.getSettings();
        if (settings.autoplay !== false) {
          this.playNext();
        } else {
          this.isPlaying = false;
          this.updatePlayPauseUI(false);
        }
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.warn("Audio element notification:", e);
    });

    // Seek interaction
    if (this.seekSlider) {
      const seekFromEvent = (e) => {
        const rect = this.seekSlider.getBoundingClientRect();
        const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        this.handleSeek(clickX / rect.width);
      };

      this.seekSlider.addEventListener('mousedown', (e) => {
        this.isDraggingSeek = true;
        seekFromEvent(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (this.isDraggingSeek) seekFromEvent(e);
      });
      window.addEventListener('mouseup', () => {
        this.isDraggingSeek = false;
      });
    }

    // Volume interaction
    if (this.volumeSlider) {
      const volFromEvent = (e) => {
        const rect = this.volumeSlider.getBoundingClientRect();
        const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        this.isMuted = false;
        this.setVolume(clickX / rect.width);
      };

      this.volumeSlider.addEventListener('mousedown', (e) => {
        this.isDraggingVolume = true;
        volFromEvent(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (this.isDraggingVolume) volFromEvent(e);
      });
      window.addEventListener('mouseup', () => {
        this.isDraggingVolume = false;
      });
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.code === 'Space') {
        e.preventDefault();
        this.togglePlayPause();
      } else if (e.code === 'ArrowRight' && e.ctrlKey) {
        this.playNext();
      } else if (e.code === 'ArrowLeft' && e.ctrlKey) {
        this.playPrev();
      } else if (e.key === 'm' || e.key === 'M') {
        this.toggleMute();
      }
    });
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.vibePlayer = new VibeAudioPlayer();
  if (window.lucide) window.lucide.createIcons();
});
