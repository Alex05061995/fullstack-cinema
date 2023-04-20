import { FC } from 'react';

import AdminNavigation from '@/components/ui/AdminNavifation/AdminNavigation';
import AdminHeader from '@/components/ui/AdminTable/AdminHeader/AdminHeader';
import AdminTable from '@/components/ui/AdminTable/AdminTable/AdminTable';
import Heading from '@/components/ui/Heading/Heading';

import Meta from '@/utils/meta/Meta';

import { useActors } from './useActors';

const ActorList: FC = () => {
	const { isLoading, data, deleteAsync, searchTerm, handleSearch, createAsync } = useActors();
	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Count movies']}
				tableItems={data || []}
			/>
		</Meta>
	);
};

export default ActorList;
