import {FC, ChangeEvent} from 'react';
import { MaterialIcon } from '../MaterialIcon';
import styles from './searchField.module.scss';

interface ISearchField {
    searchTerm: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField:FC<ISearchField> = ({searchTerm, handleSearch}) => {
  return (
    <div className={styles.search}>
        <MaterialIcon name='MdSearch' />
        <input placeholder='Search' value={searchTerm} onChange={handleSearch} />
    </div>
  )
}

export default SearchField