import {FC} from 'react'
import { IMenu } from './menu.interface'
import styles from './menu.module.scss'
import MenuItem from './MenuItem'
import dynamic from 'next/dynamic'

const Menu:FC<{menu: IMenu}> = ({menu: {items, title}}) => {

  const DynamicAuthItems = dynamic(() => import('./Auth/AuthItems'), {ssr: false})

  return (
    <div className={styles.menu}>
        <div className={styles.heading}>
            {title}
        </div>
        <ul className={styles.ul}>
            {items.map(item => {
              return  <MenuItem item={item} key={item.link} />
            })}
            {title === 'General' ? <DynamicAuthItems/> : null}
        </ul>
    </div>
  )
}

export default Menu