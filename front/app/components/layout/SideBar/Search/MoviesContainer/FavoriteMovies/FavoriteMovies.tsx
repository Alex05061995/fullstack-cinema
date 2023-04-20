import { FC, useEffect, useState } from 'react';

import { useFavorites } from '@/components/screens/favorites/useFavorites';
import SkeletonLoader from '@/components/ui/SkeletonLoader';

import MovieList from '../MovieList';

import NotAuthFavorites from './NotAuthFavorites';
import { useAuth } from '@/hooks/useAuth';

const FavoriteMovies: FC = () => {
	const { favorites } = useFavorites();
	const { user, isLoading } = useAuth();
	// if (!user) {
	// 	return (
	// 		<div>
	// 			<NotAuthFavorites />;
	// 		</div>
	// 	);
	// }

	return (
		// <div>
		// 	{isLoading ? (
		// 		<div className="mt-11">
		// 			<SkeletonLoader count={3} className="h-28 mb-4" />
		// 		</div>
		// 	) :
		// 		 (<MovieList
		// 			movies={favorites?.slice(0, 3) || []}
		// 			title="Favorites"
		// 			link="/favorites"
		// 		/>)

		// 	}
		// </div>

		// <MovieList
		// 	movies={favorites?.slice(0, 3) || []}
		// 	title="Favorites"
		// 	link="/favorites"
		// />
		<div>
			{!favorites || isLoading ? <NotAuthFavorites /> :
			!isLoading && <MovieList
				movies={favorites?.slice(0, 3) || []}
				title="Favorites"
				link="/favorites"
			/>}
		</div>
	);
};

export default FavoriteMovies;
