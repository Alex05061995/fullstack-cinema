import Heading from '@/components/ui/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import React from 'react'
import styles from './favorite.module.scss';
import { useFavorites } from './useFavorites';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import FavoriteItem from './FavoriteItem';

const Favorites = () => {
    const {favorites, isLoading} = useFavorites()
  return (
    <Meta title="Favorites">
			<Heading title={'Favorites'} />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favorites?.map((movie) => (
						<FavoriteItem
							key={movie._id}
							movie={movie}
						/>
					))
				)}
			</section>
		</Meta>
  )
}

export default Favorites