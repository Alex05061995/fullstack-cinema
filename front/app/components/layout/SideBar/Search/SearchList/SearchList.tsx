import Link from 'next/link';
import { FC } from 'react';

import { IMovie } from '@/shared/types/newMovie.types';

import { getMovieUrl } from '@/config/url.config';

import styles from './searchList.module.scss';
import Image from 'next/image';

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => {
					return (
						<Link legacyBehavior href={getMovieUrl(movie.slug)} key={movie._id}>
							<a>
								<Image src={movie.poster} width={50} height={50} alt={movie.title} objectFit='cover' objectPosition='top' draggable='false'/>
                <span>{movie.title}</span>
							</a>
						</Link>
					);
				})
			) : (
				<div className="text-white text-center my-4">Фильмы не найдены</div>
			)}
		</div>
	);
};

export default SearchList;
