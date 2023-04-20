import { IActor, IGenre } from "@/shared/types/newMovie.types";

export interface IActorEditInput extends Omit<IActor, '_id'> {}