import { IGalaryItem } from "@/components/ui/Gallery/gallery.interface";
import { ISlider } from "@/components/ui/Slider/slider.interface";

export interface IHome {
    slides: ISlider[];
    trendingMovies: IGalaryItem[];
    actors: IGalaryItem[];
}