import { GetStaticProps, NextPage } from 'next';

import Collections from '@/components/screens/collecions/Collections';

import Error404 from './404';
import { GenreService } from '@/services/genre.service';
import { ICollection } from '@/components/screens/collecions/collection.interface';

const Genres: NextPage<{ collections: ICollection[]}> = ({ collections }) => {
	return ( 
		<Collections
            collections = {collections || []}
		/> 
	) 
};


export const getStaticProps: GetStaticProps = async () => {
	
		const {data: collections} = await GenreService.getCollect();

		return {
			props: {
                collections
            },
			revalidate: 60
		};
	} 


export default Genres;