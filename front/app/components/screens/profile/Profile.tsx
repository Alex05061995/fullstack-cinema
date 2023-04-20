import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/ui/FormElement/Button';
import Heading from '@/components/ui/Heading/Heading';
import SkeletonLoader from '@/components/ui/SkeletonLoader';

import AuthFields from '../auth/AuthFields';

import { IProfileInput } from './profile.interface';
import styles from './profile.module.scss';
import { useProfile } from './useProfile';
import Meta from '@/utils/meta/Meta';

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit } = useProfile(setValue);

	return (
		<Meta title="Profile">
			<Heading title="Profile" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields formState={formState} register={register} />
				)}
				<Button>Update</Button>
			</form>
		</Meta>
	);
};

export default Profile;
