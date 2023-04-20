import { IsNotEmpty, IsNumber } from "class-validator";
import { Types } from "mongoose";

export class SetRatingDto {
    @IsNotEmpty()
    movieId: Types.ObjectId;
    @IsNumber()
    value: string;
}