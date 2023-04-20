import Heading from '@/components/ui/Heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { IHome } from './home.interface';
import Slider from '@/components/ui/Slider/Slider';
import SubHeading from '@/components/ui/Heading/SubHeading';
import Gallery from '@/components/ui/Gallery/Gallery';

export const Home: FC<IHome> = ({slides, actors, trendingMovies}) => {
	
	return (
		<Meta title='Watch movie online' description='Stream right now in your browser'>
			<Heading title='Watch movies online' className='text-grey-300 mb-8  text-xl' />
			{slides.length && <Slider slides={slides}/>}
			<div className='my-10'>
				<SubHeading title='Trending now' />
				{trendingMovies.length && <Gallery items={trendingMovies}/>}
			</div>

			<div>
				<SubHeading title='Best actors' />
				{actors.length && <Gallery items={actors}/>}
			</div>
		</Meta >
	);
};

export default Home;
