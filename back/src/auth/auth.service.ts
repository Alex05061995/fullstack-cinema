import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { AuthDto } from './dto/auth.dto';
import { hashSync, genSaltSync, compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RefreshToken } from './dto/refreshToken.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
		private readonly jwtService: JwtService
	) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto);
		const tokens = await this.issueTokenPair(String(user._id));

		return {
			user: this.returnUserFields(user),
			...tokens,
		};
	}

	async register(dto: AuthDto) {
		const oldUser = await this.userModel.findOne({ email: dto.email });
		if (oldUser) {
			throw new BadRequestException(
				'Пользователь с таким email уже существует'
			);
		}

		const newUser = new this.userModel({
			email: dto.email,
			password: hashSync(dto.password, genSaltSync(7)),
		});
		const user = await newUser.save();

		const tokens = await this.issueTokenPair(String(newUser._id));

		return {
			user: this.returnUserFields(user),
			...tokens,
		};
	}

	async getNewTokens({ refreshToken }: RefreshToken) {
		if (!refreshToken) throw new UnauthorizedException('Войдите в систему');
		const result = await this.jwtService.verifyAsync(refreshToken);
		if (!result) {
			throw new UnauthorizedException('Токен доступа отсутсвует');
		}
		const user = await this.userModel.findById(result._id);
		const tokens = await this.issueTokenPair(String(user._id));
		return {
			user: this.returnUserFields(user),
			...tokens,
		};
	}

	async validateUser(dto: AuthDto): Promise<UserModel> {
		const user = await this.userModel.findOne({ email: dto.email });
		if (!user) {
			throw new BadRequestException('Пользователь с таким email не существует');
		}
		const isValidePassword = await compare(dto.password, user.password);
		if (!isValidePassword) {
			throw new BadRequestException('Пароль неверный');
		}

		return user;
	}

	async issueTokenPair(userId: string) {
		const data = { _id: userId };
		const refreshToken = await this.jwtService.signAsync(data, {
			expiresIn: '15d',
		});
		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: '1m',
		});
		return {
			refreshToken,
			accessToken,
		};
	}

	returnUserFields(user: UserModel) {
		return {
			_id: user._id,
			email: user.email,
			isAdmin: user.isAdmin,
		};
	}
}
