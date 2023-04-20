import { FC } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useForm } from 'react-hook-form';

import AdminNavigation from '@/components/ui/AdminNavifation/AdminNavigation';
import Button from '@/components/ui/FormElement/Button';
import Field from '@/components/ui/FormElement/Field';
import SlugField from '@/components/ui/FormElement/SlugField/SlugField';
import UploadField from '@/components/ui/FormElement/UploadField/UploadField';
import Heading from '@/components/ui/Heading/Heading';
import SkeletonLoader from '@/components/ui/SkeletonLoader';

import Meta from '@/utils/meta/Meta';
import { generateSlug } from '@/utils/string/generateSlug';

import formStyles from '../../../ui/FormElement/admin-form.module.scss';

import { IActorEditInput } from './actor-edit.interface';
import { useActorEdit } from './useActorEdit';

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	});

	const { isLoading, onSubmit } = useActorEdit(setValue);

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('name') || '')); //
								}}
							/>

							<Controller
								control={control}
								name="photo"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										error={error}
										folder="actors"
										placeholder="Photo"
										value={value}
									/>
								)}
								rules={{
									required: 'Photo is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default ActorEdit;
