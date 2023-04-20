import { IMovie } from "@/shared/types/newMovie.types";

export interface ICatalog {
    title: string;
    description?: string;
    movies: IMovie[];
}