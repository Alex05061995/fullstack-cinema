import { GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/CatalogMovies/Catalog';

import { IMovie } from '@/shared/types/newMovie.types';

import { MovieService } from '@/services/movie.service';

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title={'Fresh movies'}
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();

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

export default FreshPage;
