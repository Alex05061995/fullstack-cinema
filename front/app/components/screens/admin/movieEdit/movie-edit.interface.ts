import { IMovie } from "@/shared/types/newMovie.types";

export interface IMovieEditInput extends Omit<IMovie, '_id'> {}