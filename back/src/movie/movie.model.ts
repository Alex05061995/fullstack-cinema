import { prop, Ref } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ActorModel } from "src/actor/actor.model";
import { GenreModel } from "src/genre/genre.model";

export interface MovieModel extends Base {}

export class Parametrs {
    @prop()
    year: number

    @prop()
    duration: number

    @prop()
    country: string
}

export class MovieModel extends TimeStamps {
    @prop()
    poster: string

    @prop()
    bigPoster: string

    @prop()
    title: string

    @prop({unique: true})
    slug: string

    @prop()
    videoUrl: string

    @prop({ref: () => GenreModel})
    genres: Ref<GenreModel>[]

    @prop({ref: () => ActorModel})
    actors: Ref<ActorModel>[]

    @prop({default: false})
    isSendTelegram?: boolean

    @prop()
    parametrs?: Parametrs

    @prop({default : 0})
    rating?: number

    @prop({default : 0})
    countOpen?: number
}