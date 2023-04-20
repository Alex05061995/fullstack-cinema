import AdminNavigation from '@/components/ui/AdminNavifation/AdminNavigation'
import AdminHeader from '@/components/ui/AdminTable/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/AdminTable/AdminTable/AdminTable'
import Heading from '@/components/ui/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import {FC} from 'react'
import { useGenres } from './useGenres'

const GenreList:FC = () => {
    const {isLoading, data, deleteAsync, searchTerm, handleSearch, createAsync} = useGenres()
  return (
    <Meta title="Genres">
    <AdminNavigation />
    <Heading title="Genres"/>
    <AdminHeader  handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
    <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Name', 'Slug']} tableItems={data || []}/>
  </Meta>
  )
}

export default GenreList