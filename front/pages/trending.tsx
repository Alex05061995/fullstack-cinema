import { GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/CatalogMovies/Catalog';

import { IMovie } from '@/shared/types/newMovie.types';

import { MovieService } from '@/services/movie.service';

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title={'Trending movies'}
			description="Trending moviesin excellent quality: legal, safe, without ads"
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies();

		return {
			props: {
                movies
            },
			revalidate: 60
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default TrendingPage;