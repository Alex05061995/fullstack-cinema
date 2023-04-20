import { IsString } from 'class-validator';

export class RefreshToken {
	@IsString({
		message: 'Отсутствует токен или он не является строкой',
	})
	refreshToken: string;
}
