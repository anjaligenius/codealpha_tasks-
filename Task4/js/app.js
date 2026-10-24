/* ==========================================================================
   VibePlayer - App Manager, Data Persistence & Page Utilities
   ========================================================================== */

const VibeApp = {
  // 1. Playlists Management
  getPlaylists() {
    const raw = localStorage.getItem('vibe_playlists');
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error("Error parsing playlists:", e);
      }
    }
    // Seed default playlists
    const defaults = window.VIBE_CATALOG ? window.VIBE_CATALOG.defaultPlaylists : [];
    localStorage.setItem('vibe_playlists', JSON.stringify(defaults));
    return defaults;
  },

  savePlaylists(playlists) {
    localStorage.setItem('vibe_playlists', JSON.stringify(playlists));
    window.dispatchEvent(new CustomEvent('vibePlaylistsUpdated', { detail: { playlists } }));
  },

  createPlaylist(name, description = "") {
    if (!name || !name.trim()) return null;
    const playlists = this.getPlaylists();
    const newId = 'pl-' + Date.now();
    const coverImages = [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80"
    ];
    const randomCover = coverImages[Math.floor(Math.random() * coverImages.length)];

    const newPlaylist = {
      id: newId,
      name: name.trim(),
      description: description.trim() || "Curated playlist created on VibePlayer.",
      coverArt: randomCover,
      songIds: [1, 2], // Start with sample tracks
      createdAt: new Date().toISOString().split('T')[0]
    };

    playlists.unshift(newPlaylist);
    this.savePlaylists(playlists);
    return newPlaylist;
  },

  deletePlaylist(playlistId) {
    let playlists = this.getPlaylists();
    playlists = playlists.filter(p => p.id !== playlistId);
    this.savePlaylists(playlists);
  },

  addSongToPlaylist(playlistId, songId) {
    const playlists = this.getPlaylists();
    const target = playlists.find(p => p.id === playlistId);
    if (target && !target.songIds.includes(songId)) {
      target.songIds.push(songId);
      this.savePlaylists(playlists);
      return true;
    }
    return false;
  },

  removeSongFromPlaylist(playlistId, songId) {
    const playlists = this.getPlaylists();
    const target = playlists.find(p => p.id === playlistId);
    if (target) {
      target.songIds = target.songIds.filter(id => id !== songId);
      this.savePlaylists(playlists);
      return true;
    }
    return false;
  },

  // 2. History Management
  getHistory() {
    const raw = localStorage.getItem('vibe_history');
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error("Error parsing history:", e);
      }
    }
    // Seed initial history if none exists
    const now = Date.now();
    const initialHistory = [
      { songId: 1, playedAt: now - 1000 * 60 * 4 }, // 4 mins ago
      { songId: 2, playedAt: now - 1000 * 60 * 28 }, // 28 mins ago
      { songId: 4, playedAt: now - 1000 * 60 * 95 }, // 1.5 hrs ago
      { songId: 3, playedAt: now - 1000 * 60 * 60 * 6 }, // 6 hrs ago
      { songId: 5, playedAt: now - 1000 * 60 * 60 * 22 } // Yesterday
    ];
    localStorage.setItem('vibe_history', JSON.stringify(initialHistory));
    return initialHistory;
  },

  clearHistory() {
    localStorage.setItem('vibe_history', JSON.stringify([]));
    window.dispatchEvent(new CustomEvent('vibeHistoryUpdated'));
  },

  formatRelativeTime(timestamp) {
    if (!timestamp) return "Recently";
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    if (diff < 172800) return "Yesterday";
    return `${Math.floor(diff / 86400)} days ago`;
  },

  // 3. Navigation Active Highlight
  highlightActiveNav() {
    const currentPath = window.location.pathname.toLowerCase();
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    document.querySelectorAll('.nav-item').forEach(item => {
      const href = item.getAttribute('href');
      if (href) {
        const itemFile = href.substring(href.lastIndexOf('/') + 1);
        if (itemFile === filename || (filename === '' && itemFile === 'index.html')) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    });

    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      const href = item.getAttribute('href');
      if (href) {
        const itemFile = href.substring(href.lastIndexOf('/') + 1);
        if (itemFile === filename || (filename === '' && itemFile === 'index.html')) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    });
  }
};

window.VibeApp = VibeApp;

document.addEventListener('DOMContentLoaded', () => {
  VibeApp.highlightActiveNav();
});
