# VibePlayer - Modern Music Player Web App

A premium, high-fidelity dark-mode music streaming web application built with **HTML5, CSS3, and Vanilla JavaScript**. Designed around the **Nocturne Audio** aesthetic: deep charcoal base, glowing electric-purple and neon-emerald accents, glassmorphic floating bars, and smooth micro-interactions.

---

## 🚀 How to Run

The local server is already running! You can open your browser and navigate to:
**[http://localhost:8080/index.html](http://localhost:8080/index.html)**

Or simply double-click **`start.bat`** in the project folder to launch the server and open your browser automatically.

---

## 📱 Page Overview

### 1. Home (`index.html`)
- **Hero Banner**: Trending mix showcase with "Play Trending Mix" CTA.
- **Featured Collections**: Filterable by All, Electronic, and Ambient vibes.
- **Song Library**: Track table with index, artwork, song title, artist, album, duration, and quick play triggers.
- **Persistent Player Dock**: Bottom bar synchronized across all pages.

### 2. My Playlists (`playlist.html`)
- **Heading & Stats**: Displays total count of custom & curated playlists.
- **Create Playlist**: Modal allowing users to name, describe, and instantly create custom playlists stored in `localStorage`.
- **Playlist Cards Grid**: Cover artwork, title, description, song count, and hover quick-play button.
- **Active Playlist Details**: Hero banner with **Play All**, **Shuffle**, **Add Songs**, and **Delete Playlist** actions.
- **Song Table**: Tracklist with track number, artwork, title, artist, duration, and **Remove Song** action.
- **Empty States**: Comprehensive empty state when no playlists exist, with a "Restore Defaults" button.

### 3. Recently Played (`recent.html`)
- **Heading & Telemetry**: "Recently Played" with live track counter.
- **Audio Timeline**: Chronological history with relative timestamps ("Just now", "4 mins ago", "Yesterday").
- **Actions**: **Play All** from history and **Clear History** button.
- **Empty State**: Friendly illustration and "Explore Songs" CTA + "Restore Sample History" demo button.

### 4. Search (`search.html`)
- **Search Bar**: Prominent input with auto-clear button and `Ctrl + K` global shortcut.
- **Category Filter Pills**: Filter results by **All**, **Songs**, **Artists**, and **Albums**.
- **Live Search**: Instant matching across song titles, artists, albums, and genres.
- **Empty State**: Popular search tags and mood/genre cards.
- **Loading & No-Results States**: Animated search indicator and helpful feedback when no matches exist.

### 5. Album Details (`album.html`)
- **Hero Showcase**: Large high-resolution album artwork, title, artist avatar with verified badge, release year, tracks count, and total duration.
- **Studio Telemetry**: Displays lossless bit-depth (e.g. 96kHz / 24-bit Stereo Master) and peak dynamic range.
- **Action Controls**: **Play Album**, **Shuffle**, and **Save** buttons.
- **Tracklist Table**: Track numbers, animated soundbar visualizer on the active playing song, play counts, and durations.
- **Browse Other Albums**: Grid to easily navigate between albums (*Ethereal Horizons*, *Retro Synthesis*, *Quantum Lo-Fi*, *Silent Architecture*, *Vivid Dreams*).

### 6. Settings (`settings.html`)
- **Audio & Playback**: Accessible switches for **Autoplay Next Track**, **Shuffle by Default**, and **Repeat by Default**.
- **Volume Slider**: Default volume slider with live percentage readout (e.g. 75%).
- **Audio Fidelity**: Lossless FLAC, 320 kbps, and 160 kbps quality tiers.
- **Theme Preference Picker**: Instant live theme switcher between **Nocturne Audio**, **Cyber Violet**, **Midnight Emerald**, and **Obsidian Void**.
- **Data & Storage**: Real-time stats on stored playlists, history entries, and favorites, with a **JSON Export** button.
- **Reset Settings**: Restores defaults with modal confirmation.

---

## 🎧 Global Audio & Navigation Features
- **Cross-Page Synchronization**: Playback state, current song, volume, liked tracks, shuffle, and repeat persist in `localStorage` across page transitions.
- **Real Audio Engine**: Uses local synthesized audio files (`assets/audio/*.wav`) for immediate, reliable playback without network latency or 404s.
- **Responsive Layout**:
  - **Desktop**: Full sidebar navigation + bottom dock player.
  - **Tablet**: Collapsed icon navigation dock.
  - **Mobile**: Sticky bottom navigation bar with easy touch controls.
- **Keyboard Shortcuts**:
  - `Space`: Play / Pause toggle
  - `Ctrl + Right Arrow`: Skip to Next track
  - `Ctrl + Left Arrow`: Skip to Previous track
  - `M`: Toggle Mute
  - `Ctrl + K`: Quick focus Search
