import {ChangeEvent, FC} from 'react'
import SearchField from '../../SearchField/searchField';
import AdminCreateButton from './AdminCreateButton/AdminCreateButton';
import styles from './adminHeader.module.scss';

interface IAdminHeader {
    onClick?: () => void;
    searchTerm: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AdminHeader:FC<IAdminHeader> = ({handleSearch, onClick, searchTerm}) => {
  return (
    <div className={styles.header}>
        <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
        {onClick && <AdminCreateButton onClick={onClick}/> }
    </div>
  )
}

export default AdminHeader