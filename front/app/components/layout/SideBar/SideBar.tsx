import MoviesContainer from './Search/MoviesContainer/MoviesContainer';
import Search from './Search/Search';
import styles from './sideBar.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}

export default SideBar;
