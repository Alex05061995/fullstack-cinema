import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { getGenreUrl } from '@/config/url.config';

import CollectionImage from './CollectionImage';
import { ICollection } from './collection.interface';
import styles from './collection.module.scss';

const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link className={styles.collection} href={getGenreUrl(collection.slug)}>
			<CollectionImage collection={collection} />

			<div className={styles.content}>
				<div className={styles.title}>{collection.title}</div>
			</div>

			<div className={classNames(styles.behind, styles.second)}>
				<CollectionImage collection={collection} />
			</div>
            
			<div className={classNames(styles.behind, styles.third)}>
				<CollectionImage collection={collection} />
			</div>
		</Link>
	);
};

export default CollectionItem;
