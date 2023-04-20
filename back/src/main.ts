import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
	const app = await NestFactory.create(AppModule);
	app.enableCors()
	app.setGlobalPrefix('api');
	await app.listen(5000);
}
start();
