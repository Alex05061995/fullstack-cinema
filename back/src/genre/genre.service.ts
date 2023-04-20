import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { MovieService } from 'src/movie/movie.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { ICollection } from './genre.interface';
import { GenreModel } from './genre.model';

@Injectable()
export class GenreService {
    constructor(@InjectModel(GenreModel) private readonly genreModel: ModelType<GenreModel>,
    private readonly movieService: MovieService) { }

    async bySlug(slug: string) {
        const doc =  await this.genreModel.findOne({ slug }).exec();
        if(!doc) throw new NotFoundException('Жанр не найден');
        return doc
    }

    async getAll(genreTerm?: string) {
        let options = {}

        if (genreTerm) {
            options = {
                $or: [
                    {
                        name: new RegExp(genreTerm, 'i'),
                    },
                    {
                        slug: new RegExp(genreTerm, 'i'),
                    },
                    {
                        description: new RegExp(genreTerm, 'i'),
                    }
                ]
            }
        }

        return await this.genreModel.find(options).select('-updatedAt -__v').sort({ createdAt: 'desc' }).exec();
    }

    async getCollection(): Promise<ICollection[]> {
		const genres = await this.getAll()

		const collections = await Promise.all(
			genres.map(async (genre) => {
				const moviesByGenre = await this.movieService.byGeners([genre._id])

				const result: ICollection = {
					_id: String(genre._id),
					title: genre.name,
					slug: genre.slug,
					image: moviesByGenre[0] ? moviesByGenre[0]?.bigPoster : ''
				}

				return result
			})
		)

		return collections
	}

    /*Admin place*/

    async byId(_id: string) {
        const genre = await this.genreModel.findById(_id);
        if (!genre) throw new NotFoundException('Такой жанр не найден');
        return genre;
    }

    async create() {
        const defaultValue: CreateGenreDto = {
            name: '',
            slug: '',
            description: '',
            icon: ''
        }
        const genre = await this.genreModel.create(defaultValue);
        return genre._id;
    }

    async update(_id: string, dto: CreateGenreDto) {
        const updateDoc = await this.genreModel.findByIdAndUpdate(_id, dto, {
            new: true
        })
        if (!updateDoc) throw new NotFoundException('Такой жанр не найден');
        return updateDoc
    }

    async delete(_id: string) {
       const deleteDoc =  await this.genreModel.findByIdAndDelete(_id).exec();
        if (!deleteDoc) throw new NotFoundException('Такой жанр не найден');
        return deleteDoc
    }

}
