import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import SingleMovie from '@/components/screens/single-movie/SingleMovie';
import { IGalaryItem } from '@/components/ui/Gallery/gallery.interface';

import { IMovie } from '@/shared/types/newMovie.types';

import { MovieService } from '@/services/movie.service';

import { getMovieUrl } from '@/config/url.config';

import Error404 from '../404';

export interface IMoviePage {
	similarMovies: IGalaryItem[];
	movie: IMovie;
}

const ActorPage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
	return movie ? (
		<SingleMovie similarMovies={similarMovies || []} movie={movie} />
	) : (
		<Error404 />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll();
		const paths = movies.map((m) => ({
			params: { slug: m.slug },
		}));
		return {
			paths,
			fallback: 'blocking',
		};
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug));
		const { data: dataSimilarMovies } = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		);

		const similarMovies: IGalaryItem[] = dataSimilarMovies
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}));
		return {
			props: {
				similarMovies,
				movie,
			},
			revalidate: 60
		};
	} catch (e) {
		return {
			props: {},
			notFound: true,
		};
	}
};

export default ActorPage;
