import { IsArray, IsBoolean, IsNumber, IsObject, IsString } from "class-validator";

export class Parametrs {
    @IsNumber()
    year: number

    @IsNumber()
    duration: number

    @IsString()
    country: string
}

export class MovieDto  {
    @IsString()
    poster: string

    @IsString()
    bigPoster: string

    @IsString()
    title: string

    @IsString()
    slug: string

    @IsString()
    videoUrl: string

    @IsArray()
    @IsString({each: true})
    genres: string[]

    @IsArray()
    @IsString({each: true})
    actors: string[]

    isSendTelegram?: boolean

    @IsObject()
    parametrs?: Parametrs
}