import Link from 'next/link';
import { IGallaryItemProps } from './gallery.interface';
import styles from './gallery.module.scss';
import {FC} from 'react'
import classNames from 'classnames';
import Image from 'next/image';

const GalleryItem: FC<IGallaryItemProps> = ({item, variant}) => {
  return (
    <Link 
    href={item.link}
    className={classNames(styles.item, {[styles.withText]: item.content, [styles.horizontal]: variant === 'horizontal', [styles.vertical]: variant === 'vertical'})} 
    >
        <Image alt={item.name} src={item.posterPath} fill draggable = 'false' priority/>
        {item.content && (
            <div className={styles.content}>
                <div className={styles.title}>{item.content.title}</div>
                {item.content.subTitle && (
                    <div className={styles.subTitle}>{item.content.subTitle}</div>
        )}
            </div>
        )}
    </Link>
  )
}

export default GalleryItem