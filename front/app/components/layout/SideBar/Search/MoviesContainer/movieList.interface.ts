import { IMovie } from "@/shared/types/newMovie.types";

export interface IMovieList {
    title: string;
    link: string;
    movies: IMovie[]
}