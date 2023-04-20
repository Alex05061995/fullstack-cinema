import { Controller, Get, HttpCode, Param, ValidationPipe, Post } from '@nestjs/common';
import { Body, Delete, Put, Query, UsePipes } from '@nestjs/common/decorators';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenreService } from './genre.service';

@Controller('genres')
export class GenreController {
    constructor(private readonly genreService: GenreService) {}

    @Get('by-slug/:slug')
    async bySlug(@Param('slug') slug:string) {
        return this.genreService.bySlug(slug);
    }

    @Get('collections')
    async getCollections() {
        return this.genreService.getCollection();
    }

    @Get()
    async getAll(@Query('genreTerm') genreTerm:string) {
        return this.genreService.getAll(genreTerm)
    }

    @Get(':id')
    @Auth('admin')
    async get(@Param('id', IdValidationPipe) id:string) {
        return this.genreService.byId(id)
    }

    @UsePipes(new ValidationPipe())
    @Put(':id')
    @HttpCode(200)
    @Auth('admin')
    async update(
        @Param('id', IdValidationPipe) id:string,
        @Body() dto: CreateGenreDto
        ) {
        return this.genreService.update(id, dto)
    }

    @UsePipes(new ValidationPipe())
    @Post()
    @HttpCode(200)
    @Auth('admin')
    async create() {
        return this.genreService.create()
    }

    @Delete(':id')
    @HttpCode(200)
    @Auth('admin')
    async delete(@Param('id', IdValidationPipe) id:string ) {
        return this.genreService.delete(id);
    }

}
