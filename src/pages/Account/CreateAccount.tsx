import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/Button/BaseButton';
import { BaseForm } from '../../components/Form/BaseForm';
import { BaseInput } from '../../components/Form/BaseInput';
import BaseText from '../../components/Text/BaseText';
import ScreenLayout from '../../components/Layout/ScreenLayout';
import BaseCard from '../../components/Layout/BaseCard';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateAccount } from '../../hooks/useAuth';

const schema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type FormData = z.infer<typeof schema>;

export default function CreateAccount() {
  const { createAccount, isPending, error } = useCreateAccount();

  const navigate = useNavigate();

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleGoToLogin() {
    navigate('/login');
  }

  async function handleCreateAccount() {
    const isValid = await trigger();
    if (!isValid || isPending) {
      return;
    }
    const { name, email, password } = getValues();
    createAccount(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          navigate('/login');
        },
      }
    );
  }

  return (
    <ScreenLayout>
      <BaseCard>
        <BaseText className="text-2xl font-bold">Create Account</BaseText>
        <BaseForm>
          <BaseInput
            label="Name"
            placeholder="Enter your name"
            name="name"
            type="text"
            register={register}
            error={errors.name?.message}
          />
          <BaseInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email?.message}
          />
          <BaseInput
            label="Password"
            type="password"
            name="password"
            register={register}
            placeholder="Enter your password"
            error={errors.password?.message}
          />
          <div className="flex justify-center items-center p-2">
            <BaseButton onClick={() => handleCreateAccount()}>
              Create Account
            </BaseButton>
          </div>
          {error && (
            <BaseText className="text-error text-center">
              {error.message}
            </BaseText>
          )}
        </BaseForm>
        <BaseText>
          Already have an account? Log in{' '}
          <span
            className="cursor-pointer hover:underline"
            onClick={() => handleGoToLogin()}
          >
            here
          </span>
          .
        </BaseText>
      </BaseCard>
    </ScreenLayout>
  );
}
