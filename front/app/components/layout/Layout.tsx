import { FC,  ReactNode} from 'react';

import Navigation from './Navigation/Navigation';
import styles from './layout.module.scss';
import SideBar from './SideBar/SideBar';

interface ILayOut {
  children: ReactNode;
}

const Layout: FC<ILayOut> = ({children}) => {
	return (
		<div className={styles.layout}>
			<Navigation />
      <div className={styles.center}>
        {children}
      </div>
      <SideBar />
		</div>
	);
};

export default Layout;
