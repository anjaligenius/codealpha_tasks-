/* ==========================================================================
   VibePlayer - Music Catalog & Central Data Store
   ========================================================================== */

const VIBE_CATALOG = {
  songs: [
    {
      id: 1,
      title: "Sunset Serenade",
      artist: "Aura Minimal",
      album: "Ethereal Horizons",
      albumId: "ethereal-horizons",
      albumArt: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      audioSrc: "assets/audio/sunset-serenade.wav",
      duration: "0:45",
      durationSec: 45,
      genre: "chill",
      year: 2024,
      plays: "1.8M"
    },
    {
      id: 2,
      title: "Neon Cyber Highway",
      artist: "Vector Pulse",
      album: "Retro Synthesis",
      albumId: "retro-synthesis",
      albumArt: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80",
      audioSrc: "assets/audio/cyber-highway.wav",
      duration: "1:12",
      durationSec: 72,
      genre: "synth",
      year: 2023,
      plays: "2.4M"
    },
    {
      id: 3,
      title: "Deep Midnight Echoes",
      artist: "Komorebi Sounds",
      album: "Silent Architecture",
      albumId: "silent-architecture",
      albumArt: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      audioSrc: "assets/audio/midnight-echoes.wav",
      duration: "0:56",
      durationSec: 56,
      genre: "night",
      year: 2023,
      plays: "890K"
    },
    {
      id: 4,
      title: "Cosmic Flow & Focus",
      artist: "Neural Drift",
      album: "Quantum Lo-Fi",
      albumId: "quantum-lofi",
      albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      audioSrc: "assets/audio/cosmic-flow.wav",
      duration: "1:24",
      durationSec: 84,
      genre: "focus",
      year: 2024,
      plays: "1.2M"
    },
    {
      id: 5,
      title: "Emerald Breeze",
      artist: "Solitude Keys",
      album: "Vivid Dreams",
      albumId: "vivid-dreams",
      albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
      audioSrc: "assets/audio/emerald-breeze.wav",
      duration: "1:08",
      durationSec: 68,
      genre: "chill",
      year: 2024,
      plays: "940K"
    },
    {
      id: 6,
      title: "Starlight Voyage",
      artist: "Lunar Motion",
      album: "Ethereal Horizons",
      albumId: "ethereal-horizons",
      audioSrc: "assets/audio/starlight-voyage.wav",
      albumArt: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&auto=format&fit=crop&q=80",
      duration: "0:45",
      durationSec: 45,
      genre: "synth",
      year: 2024,
      plays: "1.5M"
    },
    {
      id: 7,
      title: "Drifting Petals",
      artist: "Aura Minimal",
      album: "Ethereal Horizons",
      albumId: "ethereal-horizons",
      audioSrc: "assets/audio/sunset-serenade.wav",
      albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
      duration: "1:15",
      durationSec: 75,
      genre: "chill",
      year: 2024,
      plays: "710K"
    },
    {
      id: 8,
      title: "Obsidian Horizon",
      artist: "Vector Pulse",
      album: "Retro Synthesis",
      albumId: "retro-synthesis",
      audioSrc: "assets/audio/cyber-highway.wav",
      albumArt: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      duration: "1:05",
      durationSec: 65,
      genre: "synth",
      year: 2023,
      plays: "1.1M"
    }
  ],

  albums: [
    {
      id: "ethereal-horizons",
      title: "Ethereal Horizons",
      artist: "Aura Minimal",
      year: 2024,
      genre: "Ambient Electronic / Downtempo",
      coverArt: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      description: "A lush sonic landscape of warm analog synthesizers, organic field recordings, and ethereal textures crafted for deep focus, mindful unwinding, and nocturnal momentum.",
      tracks: [1, 6, 7],
      totalDuration: "24 mins",
      label: "Nocturne Sound Labs",
      lossless: "Stereo Master 96kHz / 24-bit"
    },
    {
      id: "retro-synthesis",
      title: "Retro Synthesis",
      artist: "Vector Pulse",
      year: 2023,
      genre: "Cyber Synthwave & Darksynth",
      coverArt: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80",
      description: "High-octane neon retro-futurism propelled by driving basslines, glittering arpeggiators, and nostalgic cyberpunk textures.",
      tracks: [2, 8],
      totalDuration: "18 mins",
      label: "NeonGrid Records",
      lossless: "Studio FLAC 48kHz / 24-bit"
    },
    {
      id: "silent-architecture",
      title: "Silent Architecture",
      artist: "Komorebi Sounds",
      year: 2023,
      genre: "Deep Ambient Minimalism",
      coverArt: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
      description: "Subtle acoustic reverb and meditative sub-bass drones echoing through sacred nocturnal spaces.",
      tracks: [3],
      totalDuration: "12 mins",
      label: "Acoustic Void",
      lossless: "Hi-Res DSD 2.8MHz"
    },
    {
      id: "quantum-lofi",
      title: "Quantum Lo-Fi",
      artist: "Neural Drift",
      year: 2024,
      genre: "Chillhop & Lo-Fi Beats",
      coverArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
      description: "Smooth Rhodes electric piano chords layered over dusty vinyl crackle, acoustic drums, and warm basslines.",
      tracks: [4],
      totalDuration: "15 mins",
      label: "Vibe Chill Media",
      lossless: "Master WAV 44.1kHz / 24-bit"
    },
    {
      id: "vivid-dreams",
      title: "Vivid Dreams",
      artist: "Solitude Keys",
      year: 2024,
      genre: "Modern Classical & Ambient",
      coverArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80",
      description: "Delicate felted piano improvisations meeting gentle electronic pads and distant birdsong.",
      tracks: [5],
      totalDuration: "16 mins",
      label: "Glassroom Records",
      lossless: "Studio FLAC 96kHz / 24-bit"
    }
  ],

  artists: [
    {
      name: "Aura Minimal",
      monthlyListeners: "842,500",
      genre: "Ambient Electronic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Vector Pulse",
      monthlyListeners: "1,240,000",
      genre: "Synthwave / Cyberpunk",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Komorebi Sounds",
      monthlyListeners: "410,200",
      genre: "Lo-Fi Ambient",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Neural Drift",
      monthlyListeners: "965,800",
      genre: "Quantum Lo-Fi",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Solitude Keys",
      monthlyListeners: "620,300",
      genre: "Modern Piano Ambient",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Lunar Motion",
      monthlyListeners: "730,900",
      genre: "Cosmic Synth",
      avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80"
    }
  ],

  defaultPlaylists: [
    {
      id: "pl-chill-lofi",
      name: "Chill Lofi Beats",
      description: "Mellow vibes and warm instrumental beats to unwind and flow.",
      coverArt: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      songIds: [1, 4, 5, 7],
      createdAt: "2026-01-15"
    },
    {
      id: "pl-cyber-synth",
      name: "Cyber Synthwave",
      description: "Neon-soaked arps, retro-futuristic basslines, and high gear synth momentum.",
      coverArt: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80",
      songIds: [2, 6, 8],
      createdAt: "2026-02-02"
    },
    {
      id: "pl-deep-focus",
      name: "Deep Focus Study",
      description: "Non-intrusive soundscapes and theta rhythms for intense coding and creative flow.",
      coverArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      songIds: [4, 5, 3],
      createdAt: "2026-02-20"
    },
    {
      id: "pl-midnight-echoes",
      name: "Midnight Echoes",
      description: "Atmospheric nocturnal audio nodes for 3 AM quietude.",
      coverArt: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      songIds: [3, 1, 6],
      createdAt: "2026-03-01"
    }
  ]
};

// Expose globally
window.VIBE_CATALOG = VIBE_CATALOG;
