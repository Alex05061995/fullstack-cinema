import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ActorModel } from './actor.model';
import { ActorDto } from './dto/create-actor.dto';

@Injectable()
export class ActorService {
    constructor(@InjectModel(ActorModel) private readonly actorModel: ModelType<ActorModel>) { }

    async bySlug(slug: string) {
        const doc =  await this.actorModel.findOne({ slug });
        if(!doc) throw new NotFoundException('Актер не найден');
        return doc
    }

    async getAll(searchTerm?: string) {
        let options = {};
        if (searchTerm) {
            options = {
                $or: [
                    {
                        name: new RegExp(searchTerm, 'i')
                    },
                    {
                        slug: new RegExp(searchTerm, 'i')
                    }
                ]
            }
        }
        
        //Agregation

        return await this.actorModel.aggregate().match(options).lookup({
            from: 'Movie',
            foreignField: 'actors',
            localField: '_id',
            as: 'movies'
        }).addFields({
            countMovies: {
                $size: '$movies'
            }
        }).project({__v: 0, updatedAt: 0, movies: 0})
        .sort({createdAt: 'desc'}).exec()
    }

    //Admin
    async byId(_id:string) {
        const actor = await this.actorModel.findById(_id);
        if(!actor) throw new NotFoundException('Актер не найден');
        return actor
    }

    async create() {
        const defaultValue: ActorDto = {
            name: '',
            photo: '',
            slug: ''
        }
       const actor  = await this.actorModel.create(defaultValue);
       return actor._id;
    }

    async update(_id:string, dto: ActorDto) {
        const updateDoc = await this.actorModel.findByIdAndUpdate(_id, dto, {
            new: true
        })
        if(!updateDoc) throw new NotFoundException('Актер не найден');
        return updateDoc;
    }

    async delete(_id) {
        const deleteDoc = await this.actorModel.findByIdAndDelete(_id).exec()
        if(!deleteDoc) throw new NotFoundException('Актер не найден');
        return deleteDoc;
    }
}
