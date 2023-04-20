import GalleryItem from './GalleryItem';
import { IGalaryItem } from './gallery.interface';
import styles from './gallery.module.scss';
import {FC} from 'react'

const Gallery: FC<{items: IGalaryItem[]}> = ({items}) => {
  return (
    <div className={styles.gallery}>
        {items.map(item => <GalleryItem key={item.link} item={item} variant='vertical'/>)}
    </div>
  )
}

export default Gallery