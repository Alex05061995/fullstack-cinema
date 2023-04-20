import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { MovieModule } from 'src/movie/movie.module';
import { RatingController } from './rating.controller';
import { RatingModel } from './rating.model';
import { RatingService } from './rating.service';

@Module({
  controllers: [RatingController],
  providers: [RatingService],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: RatingModel,
        schemaOptions: {
          collection: 'Rating'
        }
      }
    ]),
    MovieModule
  ]
})
export class RatingModule {}
