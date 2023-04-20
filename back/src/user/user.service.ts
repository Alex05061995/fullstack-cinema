import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { genSaltSync, hashSync } from 'bcryptjs';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) { }

    async byId(_id: string) {
        const user = await this.userModel.findById(_id);
        if (!user) throw new NotFoundException('Пользователь не найден')
        return user
    }

    async updateProfile(_id: string, dto: UpdateUserDto) {
        const user = await this.byId(_id);
        const isSameuser = await this.userModel.findOne({ email: dto.email });

        if (isSameuser && _id !== String(isSameuser._id)) {
            throw new NotFoundException('Такой почтовый адрес уже есть')
        }

        if (dto.password) {
            user.password = hashSync(dto.password, genSaltSync(7))
        }

        user.email = dto.email;
        if (dto.isAdmin || dto.isAdmin === false) {
            user.isAdmin = dto.isAdmin
        }

        await user.save();
        return
    }

    async getCount() {
        return await this.userModel.find().count().exec();
    }

    async getAll(searchTerm?: string) {
        let options = {}
        if(searchTerm) {
            options = {
                $or: [{email: new RegExp(searchTerm, 'i')}]
            }
        }
        return this.userModel.find(options).select('-password -updatedAt -__v').sort({createdAt: 'desc'}).exec();
    }

    async delete(id: string) {
        return await this.userModel.findByIdAndDelete(id).exec()
    }

    async toggleFavorite(movieId: Types.ObjectId, user: UserModel) {
        const {_id, favorites} = user;

        await this.userModel.findByIdAndUpdate(_id, {
            favorites: favorites.includes(movieId) ? favorites.filter(id => String(id) !== String(movieId)) : [...favorites, movieId]
        })
    }

    async getFavoriteMovies(_id: Types.ObjectId) {
        return await this.userModel.findById(_id, 'favorites').populate({path: 'favorites', populate: {path: 'genres'}}).then(data => data.favorites)
    }
}
