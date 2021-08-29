/** Dummy data. */
export const samplePlaylistData = [
  {
    id: 'p1',
    name: '28.08.21 #BaileDoGanja',
    artist: 'Daniel Ganjaman',
    artistPage: 'url',
    playlistGroupName: '#BaileDoGanja',
    playlistGroupImage: 'url',
    playlistGroupPage: 'url',
    playlistImage: 'url',
    links: {
      spotify: 'https://open.spotify.com/playlist/0UTb2AgqwHuxvUMGqRE6wZ',
      twitch: 'url',
      applemusic: 'url',
      deezer: 'url',
      tidal: 'url',
      soundcloud: 'url',
      youtubemusic: 'url',
      amazonmusic: 'url',
      resso: 'url'
    }
  }
]

export const sampleGroupData = [
  {
    id: 'g1',
    name: 'Baile do Ganja',
    profileImage: 'url',
    coverImage: 'url',
    links: {
      site: 'url',
      instagram: 'url',
      twitter: 'url',
      facebook: 'url',
      spotify: 'url',
      twitch: 'url',
      applemusic: 'url',
      deezer: 'url',
      tidal: 'url',
      soundcloud: 'url',
      youtubemusic: 'url',
      amazonmusic: 'url',
      resso: 'url'
    },
    playlists: ['p1', 'p2', 'p3'],
    users: ['u1', 'u2', 'u3']
  }
]

export const sampleUserData = [
  {
    id: 'u1',
    name: 'Baile do Ganja',
    profileImage: 'url',
    coverImage: 'url',
    links: {
      site: 'url',
      instagram: 'url',
      twitter: '',
      facebook: '',
      spotify: 'url',
      twitch: 'url',
      applemusic: 'url',
      deezer: 'url',
      tidal: 'url',
      soundcloud: 'url',
      youtubemusic: 'url',
      amazonmusic: 'url',
      resso: 'url'
    },
    groups: ['g1', 'g2', 'g3'],
    playlists: ['p1', 'p2', 'p3']
  }
]