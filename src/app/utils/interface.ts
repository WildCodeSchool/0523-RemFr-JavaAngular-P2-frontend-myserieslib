export interface ICategories {
  id: string;
  name: string;
}

export interface ISeries {
  id: string;
  name: string;
  producer: string;
  pictureUrl: string;
  trailerUrl: string;
  releaseDate: string;
  description: string;
  isCompleted: boolean;
  categories: ICategories[];
  actors: IActors[];
  show?: boolean;
  image?: string;
  rating: number;
}

export interface IActors {
  id: string;
  firstname: string;
  lastname: string;
  pictureUrl: string;
}

export interface ILibraries {
  id: string;
  score: number;
  comment: string;
  serie: ISeries;
  status: string;
  image?: string;
}
