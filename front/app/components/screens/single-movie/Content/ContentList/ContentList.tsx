import {FC, Fragment} from 'react'
import { ICOntentList } from '../content.interface';
import styles from './contentList.module.scss';
import Link from 'next/link';

const ContentList: FC<ICOntentList> = ({links, name}) => {
  return (
    <div className={styles.list}>
        <div className={styles.link}>
            {links.map((link, index) => <Fragment key={link.link}>
                <Link className={styles.href} href={link.link}>{name} : {link.title}</Link>
                {index + 1 !== links.length ? ',' : ''}
            </Fragment>)}
        </div>
    </div>
  )
}

export default ContentList