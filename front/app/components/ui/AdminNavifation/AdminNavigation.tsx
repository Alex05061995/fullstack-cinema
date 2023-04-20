import {FC} from 'react';
import styles from './adminNavigation.module.scss';
import AdminNavItem from './AdminNavItem';
import { navItems } from './admin-navigation.data';

const AdminNavigation:FC = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            {navItems.map(navItem => <AdminNavItem item={navItem} key={navItem.link} />)}
        </ul>
    </nav>
  )
}

export default AdminNavigation