import { FC } from 'react';
import { UseFormRegister, FormState, FieldErrors, useForm, } from 'react-hook-form';

import Field from '@/components/ui/FormElement/Field';

import { validEmail } from '@/shared/regex';

interface IAuthFields {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: {errors},
	isPasswordRequired = false,
}) => {
	return <>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
            <Field
				{...register('password', isPasswordRequired ? {
					required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Min length should be 6 symbols'
                    }
				} : {})}
                type='password'
                placeholder='Password'
                error={errors.password}
			/>
		</>
	;
};

export default AuthFields;
