import Home from '@/components/screens/home/Home';
import { IHome } from '@/components/screens/home/home.interface';
import { IGalaryItem } from '@/components/ui/Gallery/gallery.interface';
import { ISlider } from '@/components/ui/Slider/slider.interface';
import { getActorUrl, getActorsBySlugUrl, getActorssUrl } from '@/config/api.config';
import { getMovieUrl } from '@/config/url.config';
import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';
import { getGenresList } from '@/utils/movie/getGenresListEach';
import { errorCatch } from 'api/api.helpers';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<IHome> = ({slides, actors, trendingMovies}) => {
	
	return <Home slides={slides} actors={actors} trendingMovies={trendingMovies}/>;
};

export const getStaticProps: GetStaticProps = async () => {
	
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlider[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const { data: dataActors } = await ActorService.getAll();
		const actors: IGalaryItem[] = dataActors.slice(0, 7).map((a) => ({
			posterPath: a.photo,
			link: `actor/${a.slug}`,
			name: a.name,
			content: {
				title: a.slug,
				subTitle: `+${a.countMovies} movies`
			}
		}))	
		const dataTrendingMovies = await MovieService.getMostPopularMovies();
		const trendingMovies: IGalaryItem[] = dataTrendingMovies.slice(0, 7).map((m) => ({
			posterPath: m.poster,
			link: getMovieUrl(m.slug),
			name: m.title,
		}))	

		return {
			props: {
				slides,
				actors,
				trendingMovies
			} as IHome,
			revalidate: 60
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: []
			} 
		}
	}
}

export default HomePage;
