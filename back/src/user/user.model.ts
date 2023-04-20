import { prop, Ref } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { MovieModel } from 'src/movie/movie.model';

export interface UserModel extends Base {} //Base добавляет id

export class UserModel extends TimeStamps {
	//Timestamps добавляет createdAt и еще created
	@prop({ unique: true })
	email: string;
	@prop()
	password: string;
	@prop({ default: false })
	isAdmin?: boolean;
	@prop({ default: [], ref: () => MovieModel })
	favorites?: Ref<MovieModel>[];
}
