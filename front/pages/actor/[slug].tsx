import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/CatalogMovies/Catalog';

import { IActor, IMovie } from '@/shared/types/newMovie.types';

import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';
import Error404 from '../404';

export interface IActorPage {
	movies: IMovie[];
	actor: IActor;
}

const SlugPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ?
		(
			<Catalog movies={movies || []} title={actor.name} />
		) : <Error404 />
	
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll();

		const paths = actors.map((a) => ({
			params: { slug: a.slug },
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
		const { data: actor } = await ActorService.getBySlug(String(params?.slug));

		const { data: movies } = await MovieService.getBySlug(actor._id);
	
		return {
			props: {
				movies,
				actor,
			},
			revalidate: 60,
		};
	} catch (e) {
		return {
			props: {
				movies : [],
				actor : [],
			},
		};
	}
};

export default SlugPage;
