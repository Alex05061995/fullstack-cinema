import {FC} from 'react';
import PopularMovies from './PopularMovies';
import dynamic from 'next/dynamic';

const DynamicFavorite = dynamic(() => import('./FavoriteMovies/FavoriteMovies'))

const MoviesContainer: FC = () => {
  return (
    <div>
        <PopularMovies />
        <DynamicFavorite />
    </div>
  )
}

export default MoviesContainer