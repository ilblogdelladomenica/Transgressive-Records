export enum ReleaseType {
  ALBUM = 'Album',
  EP = 'EP',
  REISSUE = 'Ristampa'
}

export enum LinkType {
  VIDEO = 'video',
  REVIEW = 'review',
  AUDIO = 'audio',
  SCORE = 'score'
}

export interface ExternalLink {
  label: string;
  url: string;
  type: LinkType;
}

export interface RecordItem {
  id: string;
  artist: string;
  title: string;
  type: ReleaseType;
  status: string;
  date: string;
  description: string;
  links: ExternalLink[];
  isUpcoming: boolean;
}