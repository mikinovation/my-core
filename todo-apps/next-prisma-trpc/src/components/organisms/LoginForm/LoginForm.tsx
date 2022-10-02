import { Button } from '../../atoms/Button/Button';
import { TextboxWithLabel } from '../../molecules/TextboxWithLabel/TextboxWithLabel';
import { LoginInputSchema } from '../../../services/api/app/auth/login/schema';
import { LoginInput } from '../../../services/api/app/auth/login/type';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useId } from 'react';
import { useForm } from 'react-hook-form';

type Values = LoginInput;

interface Props {
  initialValues?: Partial<Values>;
  onValid: (values: Values) => Promise<void>;
}

const defaultValues: Values = {
  email: '',
  password: '',
};

export const LoginForm = ({ initialValues, onValid }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(LoginInputSchema),
  });
  const headingId = useId();
  return (
    <div className="card w-96 bg-base-100 shadow-xl px-8 pt-6 pb-8 mb-4">
      <form aria-labelledby={headingId} onSubmit={handleSubmit(onValid)}>
        <h2 id={headingId} className="text-4xl font-normal leading-normal">
          ログイン
        </h2>
        <TextboxWithLabel
          labelProps={{ title: 'email' }}
          textboxProps={{
            ...register('email'),
            placeholder: 'Type your email',
          }}
          error={errors.email?.message}
        />
        <TextboxWithLabel
          labelProps={{ title: 'password' }}
          textboxProps={{
            ...register('password'),
            placeholder: 'Type your password',
          }}
          error={errors.password?.message}
        />
        <Button>ログインする</Button>
      </form>
    </div>
  );
};
