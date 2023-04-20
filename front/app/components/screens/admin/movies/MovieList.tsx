import AdminNavigation from '@/components/ui/AdminNavifation/AdminNavigation'
import AdminHeader from '@/components/ui/AdminTable/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/AdminTable/AdminTable/AdminTable'
import Heading from '@/components/ui/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import {FC} from 'react'
import { useMovies } from './useMovie'

const MovieList:FC = () => {
    const {isLoading, data, deleteAsync, searchTerm, handleSearch, createAsync} = useMovies()
  return (
    <Meta title="Movies">
    <AdminNavigation />
    <Heading title="Movies"/>
    <AdminHeader  handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
    <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Title', 'Genre', 'Rating']} tableItems={data || []}/>
  </Meta>
  )
}

export default MovieList