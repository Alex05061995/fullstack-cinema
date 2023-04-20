import classNames from 'classnames';
import { FC } from 'react';
import { useQuery } from 'react-query';

import SkeletonLoader from '@/components/ui/SkeletonLoader';

import { AdminService } from '@/services/admin.service';

import styles from '../../admin.module.scss';

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	);

	return (
		<div className={classNames(styles.block, styles.countUsers)}>
			<div>
                {isLoading ? <SkeletonLoader /> : <div className={styles.number}>{response?.data}</div>}
                <div className={styles.description}>users</div>
            </div>
		</div>
	);
};

export default CountUsers;