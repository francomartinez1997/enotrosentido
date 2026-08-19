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
    youtube: 'https://www.youtube.com/@EnOtroSentido',
    tiktok: 'https://www.tiktok.com/@en.otro.sentido',
  },
  spotify: {
    featuredTrack: '79rZVrm2nE4xLOpMxmZB0y',
    album: '27PHU7vkDNYlOOuBzrtFbm',
  },
  youtube: {
    enVivo: 'Dqpims4Bm0g',
  },
  nav: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Música', href: '#musica' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Links', href: '#links' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const;

/** Imagen principal del hero */
export const heroImage = '/images/gallery/foto-de-la-banda.jpg';

/** Fondo parallax (solo tema oscuro, desktop) */
export const parallaxBackgroundImage = '/images/gallery/portada.jpg';

export const aboutText = {
  lead: 'Un proyecto artísticamente ambicioso y descontracturado. Rock moderno con tintes de pop y géneros experimentales.',
  paragraphs: [
    'La espera es nuestro primer disco: diez canciones que nos tomaron dos años, grabadas entre viajes por el sur y el interior de Córdoba, distintos estudios y distintos productores.',
    'El nombre del álbum resignifica la espera como algo positivo — ese viaje en auto, el café en la ruta, la ansiedad linda de que algo suceda mientras disfrutás el camino.',
    'Somos de Córdoba. Nos presentamos en vivo, subimos música y seguimos gestando lo que viene.',
  ],
};

export const galleryImages = [
  {
    src: '/images/gallery/galeria1.jpg',
    alt: 'En otro sentido — galería 1',
    caption: 'Galería 1',
  },
  {
    src: '/images/gallery/galeria2.jpg',
    alt: 'En otro sentido — galería 2',
    caption: 'Galería 2',
  },
  {
    src: '/images/gallery/galeria3.jpg',
    alt: 'En otro sentido — galería 3',
    caption: 'Galería 3',
  },
  {
    src: '/images/gallery/galeria4.jpg',
    alt: 'En otro sentido — galería 4',
    caption: 'Galería 4',
  },
  {
    src: '/images/gallery/galeria5.jpg',
    alt: 'En otro sentido — galería 5',
    caption: 'Galería 5',
  },
  {
    src: '/images/gallery/galeria7.jpg',
    alt: 'En otro sentido — galería 7',
    caption: 'Galería 7',
  },
  {
    src: '/images/gallery/galeria8.jpg',
    alt: 'En otro sentido — galería 8',
    caption: 'Galería 8',
  },
  {
    src: '/images/gallery/galeria9.jpg',
    alt: 'En otro sentido — galería 9',
    caption: 'Galería 9',
  },
  {
    src: '/images/gallery/galeria10.jpg',
    alt: 'En otro sentido — galería 10',
    caption: 'Galería 10',
  },
  {
    src: '/images/gallery/galeria11.jpg',
    alt: 'En otro sentido — galería 11',
    caption: 'Galería 11',
  },
  {
    src: '/images/gallery/galeria13.jpg',
    alt: 'En otro sentido — galería 13',
    caption: 'Galería 13',
  },
  {
    src: '/images/gallery/galeria12.jpg',
    alt: 'En otro sentido — galería 12',
    caption: 'Galería 12',
  },
];

export const externalLinks = [
  {
    title: 'La espera · Disco completo',
    description: '10 canciones · 2024',
    href: 'https://open.spotify.com/intl-es/album/27PHU7vkDNYlOOuBzrtFbm',
  },
  {
    title: 'En tus ojos · En vivo',
    description: 'Pez Volcán 2024',
    href: 'https://www.youtube.com/watch?v=Dqpims4Bm0g&list=RDDqpims4Bm0g&start_radio=1',
  },
  {
    title: 'La espera · Full álbum video',
    description: 'Video completo del disco',
    href: 'https://www.youtube.com/watch?v=HYQnleco0sY',
  },
  {
    title: 'Instagram',
    description: '@enotrosentido_',
    href: 'https://www.instagram.com/enotrosentido_/',
  },
  {
    title: 'TikTok',
    description: '@en.otro.sentido',
    href: 'https://www.tiktok.com/@en.otro.sentido',
  },
  {
    title: 'Linktree',
    description: 'Todos nuestros links',
    href: 'https://linktr.ee/eosnetacosmica',
  },
];
