import { FC } from 'react';

import Logo from './Logo';
import MenuContainer from './MenuContainer/MenuContainer';
import styles from './navigation.module.scss';

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	);
};

export default Navigation;
