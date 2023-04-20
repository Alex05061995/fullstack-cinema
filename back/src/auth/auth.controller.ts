import { Controller, UsePipes, ValidationPipe, HttpCode } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RefreshToken } from './dto/refreshToken.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {
		return this.authService.login(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: AuthDto) {
		return this.authService.register(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login/access-token')
	async getNewTokens(@Body() dto: RefreshToken) {
		return this.authService.getNewTokens(dto);
	}
}
