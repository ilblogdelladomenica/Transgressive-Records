import { RecordItem, ReleaseType, LinkType } from './types';

export const RECORDS_DATA: RecordItem[] = [
  {
    id: '1',
    artist: 'Beverly Glenn-Copeland',
    title: 'Laughter In Summer',
    type: ReleaseType.ALBUM,
    status: '#1 Annunciato',
    date: '06/02/2026',
    description: 'Un album collaborativo profondamente intimo, che è stato definito una "tenera lettera d\'amore" del leggendario artista alla moglie Elizabeth, esplorando lutto, memoria e gioia.',
    isUpcoming: true,
    links: [
      { label: 'Let Us Dance (Movement One)', url: 'https://www.youtube.com/watch?v=By9RF-47fXs', type: LinkType.VIDEO },
      { label: 'The Quietus - News Release', url: 'https://thequietus.com/articles/beverly-glenn-copeland-new-album-laughter-in-summer', type: LinkType.REVIEW }
    ]
  },
  {
    id: '2',
    artist: 'Jenny On Holiday',
    title: 'Quicksand Heart',
    type: ReleaseType.ALBUM,
    status: '#2 Annunciato',
    date: '09/01/2026',
    description: 'L\'attesissimo debutto da solista di Jenny Hollingworth (metà dei Let\'s Eat Grandma). Promette un alt-pop euforico, onesto e cinematografico.',
    isUpcoming: true,
    links: [
      { label: 'Good Intentions (Official Audio)', url: 'https://www.youtube.com/watch?v=M9p7l_n3m80', type: LinkType.AUDIO },
      { label: 'The Line of Best Fit - News Release', url: 'https://www.thelineofbestfit.com/new-music/jenny-on-holiday-announces-debut-album-quicksand-heart', type: LinkType.REVIEW }
    ]
  },
  {
    id: '3',
    artist: 'Nadia Kadek',
    title: 'Green Car',
    type: ReleaseType.EP,
    status: '#3 Uscita Recente',
    date: '17/10/2025',
    description: 'L\'EP di debutto che cattura l\'essenza delle relazioni giovanili e il desiderio di romanticismo, attraverso un mix intimo di alt-pop e indie-folk.',
    isUpcoming: true,
    links: [
      { label: 'Feeling It All', url: 'https://www.youtube.com/watch?v=Pa0NwgQwwjc', type: LinkType.VIDEO },
      { label: 'Clash Music - Review', url: 'https://www.clashmusic.com/reviews/nadia-kadek-green-car/', type: LinkType.REVIEW }
    ]
  },
  {
    id: '4',
    artist: 'The Antlers',
    title: 'Blight',
    type: ReleaseType.ALBUM,
    status: '#4 Uscita Recente',
    date: '10/10/2025',
    description: 'Un\'opera che fa riflettere sulla distruzione ambientale con un suono che riporta alle atmosfere più scure e commoventi della band.',
    isUpcoming: true,
    links: [
      { label: 'Blight pt 2 (Short)', url: 'https://www.youtube.com/shorts/dZTm8D2IQCg', type: LinkType.VIDEO },
      { label: '"Blight" Album Review', url: 'https://www.youtube.com/watch?v=zhDmkqr1ZtM', type: LinkType.REVIEW },
      { label: 'Metacritic Score 80', url: 'https://www.metacritic.com/music/blight/the-antlers/critic-reviews/', type: LinkType.SCORE }
    ]
  },
  {
    id: '5',
    artist: 'Rocket',
    title: 'R is for Rocket',
    type: ReleaseType.ALBUM,
    status: '#5',
    date: '03/10/2025',
    description: 'Album di debutto energico, combina shoegaze anni \'90 con un rock incisivo e "slacker cool".',
    isUpcoming: false,
    links: [
      { label: 'Wide Awake (Official Audio)', url: 'https://www.youtube.com/watch?v=Mn_1kwUC1SI', type: LinkType.AUDIO },
      { label: 'The New Eaves - Review', url: 'https://www.theneweaves.com/music/rocket-r-is-for-rocket-album-review', type: LinkType.REVIEW }
    ]
  },
  {
    id: '6',
    artist: 'Sparks',
    title: 'MADDER!',
    type: ReleaseType.EP,
    status: '#6',
    date: '03/10/2025',
    description: 'EP complementare all\'album MAD!, che contiene preziose tracce extra di pop-glam ironico.',
    isUpcoming: false,
    links: [
      { label: 'Porcupine (Official Audio)', url: 'https://www.youtube.com/watch?v=9o-D4XyS9oE', type: LinkType.AUDIO },
      { label: 'EP REVIEW – SPARKS: MADDER!', url: 'https://www.youtube.com/watch?v=b4wS9hJg_3M', type: LinkType.REVIEW }
    ]
  },
  {
    id: '7',
    artist: 'Sparks',
    title: 'MAD!',
    type: ReleaseType.ALBUM,
    status: '#7',
    date: '23/05/2025',
    description: 'Il 26° album dei fratelli Mael, un capolavoro di art-pop e rock teatrale, ricco di ironia.',
    isUpcoming: false,
    links: [
      { label: 'Fantasize', url: 'https://www.youtube.com/watch?v=f5sWJ0uW41s', type: LinkType.VIDEO },
      { label: 'MAD! ALBUM REVIEW', url: 'https://www.youtube.com/watch?v=YhZY_ef0TQY', type: LinkType.REVIEW },
      { label: 'Metacritic Score 85', url: 'https://www.metacritic.com/music/mad/sparks/critic-reviews/', type: LinkType.SCORE }
    ]
  },
  {
    id: '8',
    artist: 'UNIVERSITY',
    title: 'McCartney, It\'ll Be OK',
    type: ReleaseType.ALBUM,
    status: '#8',
    date: '20/06/2025',
    description: 'Debutto noise-rock/post-punk caotico e energico, pieno di umorismo assurdo e schiettezza.',
    isUpcoming: false,
    links: [
      { label: 'McCartney, It\'ll Be OK (Audio)', url: 'https://www.youtube.com/watch?v=H7oK9eP3T_s', type: LinkType.AUDIO },
      { label: 'NME - Review', url: 'https://www.nme.com/reviews/university-mc-cartney-itll-be-ok-review-3615454', type: LinkType.REVIEW }
    ]
  },
  {
    id: '9',
    artist: 'Greg Freeman',
    title: 'Burnover',
    type: ReleaseType.ALBUM,
    status: '#9',
    date: '13/08/2025',
    description: 'Album che unisce indie rock aggressivo e alt-country, con testi densi che esplorano miti, storia e l\'identità americana.',
    isUpcoming: false,
    links: [
      { label: 'Point and Shoot', url: 'https://www.youtube.com/watch?v=1uR1rG8z9O8', type: LinkType.AUDIO },
      { label: 'DIY Magazine - Review', url: 'https://diymag.com/review/greg-freeman-burnover', type: LinkType.REVIEW }
    ]
  },
  {
    id: '10',
    artist: 'The New Eves',
    title: 'The New Eve Is Rising',
    type: ReleaseType.ALBUM,
    status: '#10',
    date: '06/06/2025',
    description: 'Debutto di folk, noise-rock e post-punk come manifesto matriarcale misterioso e caotico.',
    isUpcoming: false,
    links: [
      { label: 'The New Eve', url: 'https://www.youtube.com/watch?v=x7K4B7Y_4qE', type: LinkType.AUDIO },
      { label: 'Review Short', url: 'https://www.youtube.com/shorts/b7AGTOBwtSs', type: LinkType.VIDEO },
      { label: 'The Guardian - Review', url: 'https://www.theguardian.com/music/2024/jun/07/the-new-eves-the-new-eve-is-rising-review', type: LinkType.REVIEW }
    ]
  },
  {
    id: '11',
    artist: 'Miso Extra',
    title: 'EARCANDY',
    type: ReleaseType.EP,
    status: '#11',
    date: '28/05/2025',
    description: 'Alt-pop/hip-hop con testi bilingue (inglese/giapponese) e una produzione dancefloor sofisticata.',
    isUpcoming: false,
    links: [
      { label: 'Earcandy', url: 'https://www.youtube.com/watch?v=e28S9a-gKQE', type: LinkType.VIDEO },
      { label: 'NME - Review', url: 'https://www.nme.com/reviews/miso-extra-earcandy-review', type: LinkType.REVIEW }
    ]
  },
  {
    id: '12',
    artist: 'Songhoy Blues',
    title: 'Héritage',
    type: ReleaseType.REISSUE,
    status: '#12',
    date: '22/01/2025',
    description: 'Ristampa per il decennale del potente debutto della band maliana, una fusione di blues del deserto e rock.',
    isUpcoming: false,
    links: [
      { label: 'Sahara', url: 'https://www.youtube.com/watch?v=u1v0kF0i0_A', type: LinkType.VIDEO },
      { label: 'The Guardian (Original)', url: 'https://www.theguardian.com/music/2015/jan/22/songhoy-blues-heritage-review', type: LinkType.REVIEW }
    ]
  },
  {
    id: '13',
    artist: 'Yannis & The Yaw',
    title: 'Lagos Paris London',
    type: ReleaseType.EP,
    status: '#13',
    date: '06/12/2024',
    description: 'Progetto solista di Yannis Philippakis (Foals) con Tony Allen, che fonde l\'afrobeat con la sensibilità indie-rock.',
    isUpcoming: false,
    links: [
      { label: 'Walk Through Fire', url: 'https://www.youtube.com/watch?v=Qx41X9D_d5c', type: LinkType.AUDIO },
      { label: 'Pitchfork - Review', url: 'https://pitchfork.com/reviews/albums/yannis-the-yaw-lagos-paris-london-ep/', type: LinkType.REVIEW }
    ]
  },
  {
    id: '14',
    artist: 'KOKOKO!',
    title: 'Butu',
    type: ReleaseType.ALBUM,
    status: '#14',
    date: '29/07/2024',
    description: 'Secondo album del collettivo congolese che crea musica elettronica e industriale con strumenti fatti in casa.',
    isUpcoming: false,
    links: [
      { label: 'Salaka Bien', url: 'https://www.youtube.com/watch?v=S-t7s8G7L20', type: LinkType.VIDEO },
      { label: 'The Line of Best Fit - Review', url: 'https://www.thelineofbestfit.com/reviews/kokoko-butu-album-review', type: LinkType.REVIEW }
    ]
  },
  {
    id: '15',
    artist: 'The Joy',
    title: 'The Joy',
    type: ReleaseType.ALBUM,
    status: '#15',
    date: '21/06/2024',
    description: 'Album di debutto del quintetto a cappella sudafricano, che mescola il canto tradizionale Zulu con ritmi moderni.',
    isUpcoming: false,
    links: [
      { label: 'Mountain', url: 'https://www.youtube.com/watch?v=Vl0d_S8jOqY', type: LinkType.AUDIO },
      { label: 'Commento', url: 'https://www.youtube.com/watch?v=W-hFpuHkQ6s', type: LinkType.REVIEW }
    ]
  }
];