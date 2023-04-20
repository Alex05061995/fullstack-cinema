import Link from 'next/link'
import {FC} from 'react'
import { INavItem } from './admin-navigation.interface'
import classNames from 'classnames'
import styles from './adminNavigation.module.scss'
import { useRouter } from 'next/router'

const AdminNavItem:FC<{item: INavItem}> = ({item: {title, link}}) => {
    const {asPath} = useRouter()
  return (
    <li>
        <Link legacyBehavior href={link}>
            <a className={classNames({
                [styles.active]: asPath === link
            })}>
                {title}
            </a>
        </Link>
    </li>
  )
}

export default AdminNavItem