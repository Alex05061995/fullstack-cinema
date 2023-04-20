import dynamic from 'next/dynamic';
import { FC } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useForm } from 'react-hook-form';
import { stripHtml } from 'string-strip-html';

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

import { IMovieEditInput } from './movie-edit.interface';
import { useAdminActors } from './useAdminActors';
import { useAdminGenres } from './useAdminGenres';
import { useMovieEdit } from './useMovieEdit';

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	});

	const DynamicSelect = dynamic(() => import('@/components/ui/Select/Select'), {
		ssr: false,
	});

	const { isLoading, onSubmit } = useMovieEdit(setValue);
	const { data: genres, isLoading: isGenresLoading } = useAdminGenres();
	const { data: actors, isLoading: isActorsLoading } = useAdminActors();

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
								{...register('title', {
									required: 'Title is required',
								})}
								placeholder="Title"
								error={errors.title}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')));
									}}
								/>
							</div>

							<Field
								{...register('parametrs.country', {
									required: 'Country is required',
								})}
								placeholder="Country"
								error={errors.parametrs?.country}
								style={{ width: '31%' }}
							/>

							<Field
								{...register('parametrs.duration', {
									required: 'Duration is required',
								})}
								placeholder="Duration"
								error={errors.parametrs?.duration}
								style={{ width: '31%' }}
							/>
						</div>

						<Controller
							control={control}
							name="genres"
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									field={field}
									options={genres || []}
									isLoading={isGenresLoading}
									isMulti
									placeholder="Genres"
									error={error}
								/>
							)}
							rules={{
								required: ':Please select at least one genre',
							}}
						/>

						<Controller
							name="actors"
							control={control}
							rules={{
								required: 'Please select at least one actor!',
							}}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Actors"
									options={actors || []}
									isLoading={isActorsLoading}
									isMulti
								/>
							)}
						/>

						<Controller
							control={control}
							name="poster"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									error={error}
									folder="movies"
									placeholder="Poster"
									value={value}
								/>
							)}
							rules={{
								required: 'Poster is required',
							}}
						/>

						<Controller
							control={control}
							name="bigPoster"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									error={error}
									folder="movies"
									placeholder="Big poster"
									value={value}
								/>
							)}
							rules={{
								required: 'Big poster is required',
							}}
						/>

						<Controller
							control={control}
							name="videoUrl"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									error={error}
									folder="movies"
									placeholder="Video"
									value={value}
									style={{ marginTop: '-25px' }}
									isNoImage
								/>
							)}
							rules={{
								required: 'Video is required',
							}}
						/>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	);
};

export default MovieEdit;
