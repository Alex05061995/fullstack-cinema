import Link from 'next/link';
import { FC } from 'react';

import logoImage from '@/assets/images/logo.svg';
import Image from 'next/image';

const Logo: FC = () => {
	return (
		<Link legacyBehavior href="/">
			<a className="px-layout mb-10 block">
                <Image style={{width: '100px', height: '100px'}} src={logoImage} width={247} height={34} alt='logo' draggable={false} />
				<h2 style={{color: 'white', fontSize: '30px'}}>Online cinema</h2>
            </a>
		</Link>
	);
};

export default Logo;
