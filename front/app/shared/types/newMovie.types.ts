import { TypeMaterialIconName } from "./icon.types";

export interface IGenre {
    _id: string;
    name: string;
    slug: string;
    description: string;
    icon: TypeMaterialIconName;
}

export interface IParametrs {
    year: number;
    duration: number;
    country: string;
}

export interface IActor {
    _id: string;
    name: string;
    slug: string;
    photo: string;
    countMovies?: number;
}

export interface IMovie {
    _id:string;
    poster: string;
    bigPoster: string;
    title: string;
    parametrs: IParametrs;
    genres: IGenre[];
    actors: IActor[];
    countOpen: number;
    videoUrl: string;
    rating: number;
    slug: string;
}