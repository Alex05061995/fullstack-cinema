import {FC} from 'react'
import styles from '../../admin.module.scss'
import CountUsers from './CountUser'
import PopularMovie from './PopularMovie'

const Statistics:FC = () => {
  return (
    <div className={styles.statistics}>
        <CountUsers />
        <PopularMovie />
    </div>
  )
}

export default Statistics