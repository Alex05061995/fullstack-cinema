import { IGenre } from "@/shared/types/newMovie.types";

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}