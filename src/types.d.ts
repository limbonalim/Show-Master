export interface ApiShow {
  score: number;
  show: Show;
}

export interface Show {
  averageRuntime: number;
  ended: string | null;
  genres: string[];
  id: number;
  image: { medium: string; } | null;
  language: string;
  name: string;
  network: { country: { name: string }, } | null;
  officialSite: string;
  premiered: string;
  rating: { average: number; };
  status: string;
  summary: string;
  type: string;
}