import { MovieService } from '@/services/movie.service';
import {FC} from 'react'
import { useQuery } from 'react-query';
import styles from '../../admin.module.scss'
import { IMovie } from '@/shared/types/newMovie.types';
import classNames from 'classnames';
import SubHeading from '@/components/ui/Heading/SubHeading';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import Link from 'next/link';
import { getMovieUrl } from '@/config/url.config';
import Image from 'next/image';

const PopularMovie:FC = () => {
    const { isLoading, data: movie } = useQuery('Most popular movie in admin', () =>
		MovieService.getMostPopularMovies(), {
            select: (data): IMovie => data[0]
        }
	);
  return (
    <div className={classNames(styles.block, styles.popular)}>
        <SubHeading title='The most popular movie' />
        {
            isLoading ? <SkeletonLoader className='h-48' /> : movie && <> 
            <h3>Открыто {movie.countOpen} раз</h3> 
            <Link href={getMovieUrl(movie.slug)}>
                    <Image width={285} height={176} src={movie.bigPoster} alt={movie.title} className={styles.image} unoptimized/>
            </Link>
            </>
        }
    </div>
  )
}

export default PopularMovie