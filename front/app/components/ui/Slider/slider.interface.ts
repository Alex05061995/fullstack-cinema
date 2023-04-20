import { IMovie } from "@/shared/types/newMovie.types";

export interface ISlider extends Pick<IMovie, '_id' | 'bigPoster' | 'title'> {
    subTitle: string;
    link: string;
}