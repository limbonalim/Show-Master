export interface ApiShow {
  score: number;
  show: Show;
}

export interface Show {
  averageRuntime: number;
  ended: string;
  genres: string[];
  id: number;
  image: { medium: string; original: string; };
  language: string;
  name: string;
  network: { country: { name: string }, };
  officialSite: string;
  premiered: string;
  rating: { average: number; };
  status: string;
  summary: string;
  type: string;
  url: string;
}