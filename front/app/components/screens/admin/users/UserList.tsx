import AdminNavigation from '@/components/ui/AdminNavifation/AdminNavigation'
import AdminHeader from '@/components/ui/AdminTable/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/AdminTable/AdminTable/AdminTable'
import Heading from '@/components/ui/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import {FC} from 'react'
import { useUsers } from './useUsers'

const UserList:FC = () => {
    const {isLoading, data, deleteAsync, searchTerm, handleSearch} = useUsers()
  return (
    <Meta title="Users">
    <AdminNavigation />
    <Heading title="Users"/>
    <AdminHeader  handleSearch={handleSearch} searchTerm={searchTerm}/>
    <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Email', 'Date register']} tableItems={data || []}/>
  </Meta>
  )
}

export default UserList