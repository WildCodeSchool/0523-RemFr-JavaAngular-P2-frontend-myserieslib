import { SafeResourceUrl } from '@angular/platform-browser';

export interface ICategories {
  id: string;
  name: string;
  series?: ISeries[];
}

export interface ISeries {
  id: string;
  name: string;
  producer: string;
  pictureUrlXS: string;
  pictureUrlXL: string;
  trailerURL: string;
  trailerSafe: SafeResourceUrl | string;
  releaseDate: string;
  description: string;
  isCompleted: boolean;
  categories: ICategories[];
  actors: IActors[];
  show?: boolean;
  image?: string;
  rating: number;
  season: number;
}

export interface IActors {
  id: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

export interface ILibraries {
  id: string;
  score: number;
  comment: string;
  serie: ISeries;
  status: string;
  checkedEpisodes: number[];
}

export interface IComment {
  comment: string;
  userNickname: string;
  score: number | null;
  serieName: string;
  userAvatar: string;
  userEmail: string;
  id: string;
}

export interface IEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  seasonNumber: number;
  image?: string;
  description: string;
  releaseDate: Date;
  serie: ISeries;
  thumbnail: string;
  showCheckbox?: boolean;
}

export interface IUser {
  id: string;
  username: string;
  nickname: string;
  email: string;
  JWT: string;
  pictureUrl: string;
  role: string;
  numberOfComments: number;
}

export interface UserJWT {
  JWT: string;
  role: string;
  id: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  nickname: string;
  email: string;
  password: string;
}

export interface IHistory {
  addedDate: Date;
  episode: IEpisode;
}
