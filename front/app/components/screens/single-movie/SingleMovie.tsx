import {FC} from 'react'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import Meta from '@/utils/meta/Meta'
import Banner from '@/components/ui/Banner/Banner'
import SubHeading from '@/components/ui/Heading/SubHeading'
import Gallery from '@/components/ui/Gallery/Gallery'
import Content from './Content/Content'
// import VideoPlayer from '@/components/ui/Video-player/Video-player'
import dynamic from 'next/dynamic'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(() => import('@/components/ui/Video-player/Video-player'), {
  ssr: false
})


const SingleMovie:FC<IMoviePage> = ({movie, similarMovies}) => {
  
  useUpdateCountOpened(movie.slug);

  return (
    <Meta title={movie?.title || ''} description={`Watch ${movie?.title}`}>
        <Banner image={movie?.bigPoster || ''} Detail={() => <Content movie={movie} />}/>

        <DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl}/>

        <div className='mt-12'>
            <SubHeading title='Similar'/>
            <Gallery items={similarMovies} />
        </div>
    </Meta>
  )
}

export default SingleMovie