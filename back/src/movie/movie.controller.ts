import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Type, UsePipes, ValidationPipe } from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { GenreIdsDto } from './dto/genreIds.dto';
import { MovieDto } from './dto/update-movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieController: MovieService) {}

    @Get('by-slug/:slug')
    async bySlug(@Param('slug') slug:string) {
        return this.movieController.bySlug(slug);
    }

    @Get('by-actor/:actorId')
    async byActor(@Param('actorId', IdValidationPipe) actorId: Types.ObjectId) {
        return this.movieController.byActor(actorId);
    }

    // @UsePipes(new ValidationPipe())
    @Post('by-geners')
    @HttpCode(200)
    async byGeners(@Body('genreIds') genreIds: Types.ObjectId[]) {
        return this.movieController.byGeners(genreIds);
    }

    @Get()
    async getAll(@Query('searchTerm') searchTerm:string) {
        return this.movieController.getAll(searchTerm);
    }

    @Get('most-popular')
    async getMostPopular() {
        return this.movieController.getMostPopular();
    }

    @Put('update-count-opened')
    @HttpCode(200)
    async updateCountOpened(@Body('slug') slug:string) {
        return this.movieController.updateCountOpened(slug);
    }

    //admin

    @Get(':id')
    @Auth('admin')
    async get(@Param('id', IdValidationPipe) id: string) {
        return this.movieController.byId(id);
    }

    @UsePipes(new ValidationPipe())
    @Post()
    @HttpCode(200)
    @Auth('admin')
    async create() {
        return this.movieController.create()
    }

    @UsePipes(new ValidationPipe)
    @Put(':id')
    @HttpCode(200)
    @Auth('admin')
    async update(@Param('id', IdValidationPipe) id: string, @Body() dto: MovieDto) {
        return this.movieController.update(id, dto)
    }
    
    @Delete(':id')
    @HttpCode(200)
    @Auth('admin')
    async delete(@Param('id', IdValidationPipe) id: string) {
        return this.movieController.delete(id)
    }
}
