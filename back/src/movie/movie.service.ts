import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { TelegramService } from 'src/telegram/telegram.service';
import { GenreIdsDto } from './dto/genreIds.dto';
import { MovieDto } from './dto/update-movie.dto';
import { MovieModel } from './movie.model';

@Injectable()
export class MovieService {
    constructor(@InjectModel(MovieModel) private readonly movieModel: ModelType<MovieModel>,
    private readonly telegramService: TelegramService) { }

    async bySlug(slug: string) {
        const doc = await this.movieModel.findOne({ slug }).populate('actors genres').exec();
        if (!doc) throw new NotFoundException('Фильм не найден');
        return doc;
    }

    async byActor(actorId: Types.ObjectId) {
        const doc = await this.movieModel.find({ actors: actorId }).exec();
        if (!doc) throw new NotFoundException('Фильмы не найден');
        return doc;
    }

    async byGeners(genreIds: Types.ObjectId[]): Promise<DocumentType<MovieModel>[]>  {
        return await this.movieModel.find({ genres: {$in: genreIds} }).exec();
    }

    async getAll(searchTerm?: string) {
        let options = {};
        if (searchTerm) {
            options = {
                $or: [
                    {
                        title: new RegExp(searchTerm, 'i')
                    }
                ]
            }

        }
        return await this.movieModel.find(options).select('-createdAt -__v').sort({createdAt: 'desc'}).populate('actors genres').exec();
    }

    async updateCountOpened(slug: string) {
        const updatedDoc = await this.movieModel.findOneAndUpdate({slug}, {
            $inc: {countOpen: 1}
        }, {new:true})
        if (!updatedDoc) throw new NotFoundException('Фильм не найден');
        return updatedDoc;
    }

    async getMostPopular() {
        return await this.movieModel.find({ countOpen: {$gt: 0} }).sort({countOpen: -1}).populate('genres').exec();
    }

    async updateRating(id: Types.ObjectId, newRating:number) {
        return this.movieModel.findByIdAndUpdate(id, {
            rating: newRating
        }, {
            new: true
        }).exec()
    }

    async sendNotification(dto: MovieDto) {
        if(process.env.NODE_ENV !== 'development') {
            await this.telegramService.sendPhoto(dto.poster)
        }

        const msg = `<b>${dto.title}</b>`

        await this.telegramService.sendMessage(msg, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            url: 'https://www.npmjs.com/package/telegraf',
                            text: 'Go to watch'
                        }
                    ]
                ]
            }
        })
    }

    //admin

    async byId(_id: string) {
        const doc = await this.movieModel.findById(_id);
        if(!doc) throw new NotFoundException('Фильм не найден');
        return doc;
    }

    async create() {
        const defaultValue: MovieDto = {
            actors: [],
            bigPoster: '',
            genres: [],
            poster: '',
            slug: '',
            title: '',
            videoUrl: '',
        }
        const movie = await this.movieModel.create(defaultValue);
        return movie._id;
    }

    async update(_id:string, dto: MovieDto) {
        //Telegram nitification
        if(!dto.isSendTelegram) {
            await this.sendNotification(dto);
            dto.isSendTelegram = true
        }

        const updatedDoc = await this.movieModel.findByIdAndUpdate(_id, dto, {
            new: true
        })
        if (!updatedDoc) throw new NotFoundException('Фильмы не найден');
        return updatedDoc;
    }

    async delete(_id) {
        const deletedDoc = await this.movieModel.findByIdAndDelete(_id);
        if (!deletedDoc) throw new NotFoundException('Фильмы не найден');
        return deletedDoc;
    }

  
}
