import { FC } from 'react';

import { MaterialIcon } from '@/components/ui/MaterialIcon';

import { IMovie } from '@/shared/types/newMovie.types';

import { getActorUrl, getGenreUrl } from '@/config/url.config';

import ContentList from './ContentList/ContentList';
import styles from './content.module.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie.parametrs.year} . </span>
				<span>{movie.parametrs.country} . </span>
				<span>{movie.parametrs.duration} min. </span>
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.slice(0, 3).map((g) => ({
					_id: g._id,
					link: getGenreUrl(g.slug),
					title: g.name,
				}))}
			/>
			<ContentList
				name="Actors"
				links={movie.actors.slice(0, 3).map((a) => ({
					_id: a._id,
					link: getActorUrl(a.slug ? a.slug : ''),
					title: a.name,
				}))}
			/>

			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>

			<FavoriteButton movieId={movie._id}/>
		</div>
	);
};

export default Content;
