export const site = {
  name: 'En otro sentido',
  shortName: 'eos',
  tagline: 'Córdoba.',
  description:
    'Rock moderno, pop y experimentación. Primer disco La espera (2024).',
  whatsapp: '5493512630359',
  // Reemplazá con un mail real para activar el formulario (FormSubmit envía confirmación la primera vez)
  contactEmail: 'francomartinez1997.fm@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/enotrosentido_/',
    linktree: 'https://linktr.ee/eosnetacosmica',
    spotify: 'https://open.spotify.com/intl-es/album/27PHU7vkDNYlOOuBzrtFbm',
    spotifyFungi: 'https://open.spotify.com/intl-es/album/4Se30w8MxJHGNAi1JeQEWO?si=-jECr3zLRW-FbtjVs__DVg',
    spotifyEnTusOjos: 'https://open.spotify.com/intl-es/album/1XjOdNOos3q3zTnJCmJ7Hk?si=umuNCmPKT1umymR55a6fwQ',
    spotifyOjala: 'https://open.spotify.com/intl-es/album/0H7sMhIuRS8gkKtJDM88YJ?si=JdcCGHz4QNuzF8opYK7Xew',
    youtube: 'https://www.youtube.com/@EnOtroSentido',
    tiktok: 'https://www.tiktok.com/@en.otro.sentido',
  },
  spotify: {
    featuredTrack: '79rZVrm2nE4xLOpMxmZB0y',
    album: '27PHU7vkDNYlOOuBzrtFbm',
  },
  youtube: {
    enVivo: 'Dqpims4Bm0g',
    fullAlbum: 'HYQnleco0sY&t=6s',
    cuantoMas: 'WHqrtQN6AHE',
  },
  nav: [
    { label: 'Banda', href: '#banda' },
    { label: 'Disco', href: '#disco' },
    { label: 'Singles', href: '#singles' },
    { label: '¿?', href: '#proximo', accent: true },
    { label: 'Archivo', href: '#archivo' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const;

/** Imagen principal del hero */
export const heroImage = '/images/gallery/portada.jpg';

export const aboutText = {
  lead: 'Un proyecto artísticamente ambicioso y descontracturado. Rock alternativo fusionado con tintes de pop y otros géneros.',
  paragraphs: [
    'La espera es nuestro primer disco: diez canciones que nos tomaron dos años, grabadas entre viajes por el sur y el interior de Córdoba, distintos estudios y distintos productores.',
    'El nombre del álbum resignifica la espera como algo positivo — ese viaje en auto, el café en la ruta, la ansiedad linda de que algo suceda mientras disfrutás el camino.',
    'Somos de Córdoba. Nos presentamos en vivo, subimos música y seguimos gestando lo que viene.',
  ],
};

export const galleryImages = [
  { src: '/images/gallery/galeria1.jpg', alt: 'En otro sentido — archivo 1' },
  { src: '/images/gallery/galeria2.jpg', alt: 'En otro sentido — archivo 2' },
  { src: '/images/gallery/galeria3.jpg', alt: 'En otro sentido — archivo 3' },
  { src: '/images/gallery/galeria4.jpg', alt: 'En otro sentido — archivo 4' },
  { src: '/images/gallery/galeria5.jpg', alt: 'En otro sentido — archivo 5' },
  { src: '/images/gallery/galeria7.jpg', alt: 'En otro sentido — archivo 6' },
  { src: '/images/gallery/galeria8.jpg', alt: 'En otro sentido — archivo 7' },
  { src: '/images/gallery/galeria9.jpg', alt: 'En otro sentido — archivo 8' },
  { src: '/images/gallery/galeria10.jpg', alt: 'En otro sentido — archivo 9' },
  { src: '/images/gallery/galeria11.jpg', alt: 'En otro sentido — archivo 10' },
  { src: '/images/gallery/galeria13.jpg', alt: 'En otro sentido — archivo 11' },
  { src: '/images/gallery/galeria12.jpg', alt: 'En otro sentido — archivo 12' },
] as const;

/** Singles — tapas + fragmento de letra */
export const singles = [
  {
    title: 'Fungi',
    meta: 'Single · Spotify',
    cover: '/images/gallery/fungi-tapa.jpg',
    href: site.social.spotifyFungi,
    excerpt: '[ fragmento x__ ]\nMe pregunto\nViste al arbol latir?',
  },
  {
    title: 'En tus ojos',
    meta: 'Single · Spotify',
    cover: '/images/gallery/entusojos-tapa.jpg',
    href: site.social.spotifyEnTusOjos,
    excerpt: '[ fragmento _x_ ]\nDespierto otra vez en cero\nes tu perfume un recuerdo',
  },
  {
    title: 'Ojalá',
    meta: 'Single · Spotify',
    cover: '/images/gallery/ojala-tapa.jpg',
    href: site.social.spotifyOjala,
    excerpt: '[ fragmento __x ]\nEl verano cae frío\ncuando más lo necesito',
  },
] as const;

export const releases = [
  {
    num: '01',
    title: 'La espera · disco completo',
    meta: '10 canciones · 2024 · Spotify',
    href: site.social.spotify,
  },
  {
    num: '02',
    title: 'La espera · full álbum video',
    meta: 'Video completo · YouTube',
    href: `https://www.youtube.com/watch?v=${site.youtube.fullAlbum}`,
  },
  {
    num: '03',
    title: 'En tus ojos · en vivo',
    meta: 'Pez Volcán 2024 · YouTube',
    href: `https://www.youtube.com/watch?v=${site.youtube.enVivo}`,
  },
  {
    num: '04',
    title: 'Cuánto más · video oficial',
    meta: 'Video completo · YouTube',
    href: `https://www.youtube.com/watch?v=${site.youtube.cuantoMas}`,
  },
] as const;

export const quickLinks = [
  { kind: 'Streaming', label: 'Spotify', href: site.social.spotify },
  { kind: 'Video', label: 'YouTube', href: site.social.youtube },
  { kind: '@enotrosentido_', label: 'Instagram', href: site.social.instagram },
  { kind: '@en.otro.sentido', label: 'TikTok', href: site.social.tiktok },
  { kind: 'Todos los links', label: 'Linktree', href: site.social.linktree },
] as const;
