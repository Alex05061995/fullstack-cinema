import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IMovie } from '@/shared/types/newMovie.types';

import { getGenreUrl, getMovieUrl } from '@/config/url.config';

import styles from './movieList.module.scss';
import { getGenresListEach } from '@/utils/movie/getGenresListEach';
import { MaterialIcon } from '@/components/ui/MaterialIcon';

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link legacyBehavior href={getMovieUrl(movie.slug)} key={movie._id}>
				<a>
					<Image
						style={{height: '100%', objectFit: 'cover'}}
						draggable="false"
						alt={movie.title}
						width='65'
						height='97'
						src={movie.poster}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, index) => (
							<Link
								legacyBehavior
								href={getGenreUrl(genre.slug)}
								key={genre._id}
							>
                                <a>
                                    {getGenresListEach(index, movie.genres.length, genre.name)}
                                </a>
                            </Link>
						))}
					</div>
				</div>
                <div className={styles.rating}>
                    <MaterialIcon name='MdStarRate' />
                    <span className={styles.movieRating}>{movie.rating.toFixed(1)}</span>
                </div>
			</div>
		</div>
	);
};

export default MovieItem;
