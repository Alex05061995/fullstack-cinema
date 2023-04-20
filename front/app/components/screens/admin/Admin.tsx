import AdminNavigation from '@/components/ui/AdminNavifation/AdminNavigation'
import Heading from '@/components/ui/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import {FC} from 'react'
import Statistics from './home/statistics/Statistics'

const Admin: FC = () => {
  return (
    <Meta title='Admin Panel'>
        <AdminNavigation />
        <Heading title='Some statistics' />
        <Statistics />
    </Meta>
  )
}

export default Admin