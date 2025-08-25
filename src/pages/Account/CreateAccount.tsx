import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/Button/BaseButton';
import { BaseForm } from '../../components/Form/BaseForm';
import { BaseInput } from '../../components/Form/BaseInput';
import BaseText from '../../components/Text/BaseText';
import BaseCard from '../../components/Layout/BaseCard';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateAccount } from '../../hooks/useAuth';
import { useSnackbar } from '../../hooks/useSnackbar';
import { BaseLink } from '../../components/Text/BaseLink';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type FormData = z.infer<typeof schema>;

export function CreateAccount() {
  const { createAccount, isPending, error, isSuccess } = useCreateAccount();
  const { showSnackbar } = useSnackbar();

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
    const { firstName, lastName, email, password } = getValues();
    createAccount(
      {
        firstName,
        lastName,
        email,
        password,
      },
      {
        onSuccess: () => {
          showSnackbar({ message: 'A confirmation email has been sent to your email.', type: 'success' });
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        },
        onError: (error) => {
          console.log(error);
          showSnackbar({ message: error.message, type: 'error' });
        },
      }
    );
  }

  return (
    <BaseCard>
      <BaseText className="text-2xl font-bold">Create Account</BaseText>
      <BaseForm>
        <BaseInput
          label="First Name"
          placeholder="Enter your first name"
          name="firstName"
          type="text"
          register={register}
          error={errors.firstName?.message}
        />
        <BaseInput
          label="Last Name"
          placeholder="Enter your last name"
          name="lastName"
          type="text"
          register={register}
          error={errors.lastName?.message}
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
          <BaseButton onClick={() => handleCreateAccount()} loading={isPending} disabled={isPending || isSuccess}>
            Create Account
          </BaseButton>
        </div>
        {error && <BaseText className="text-error text-center">{error.message}</BaseText>}
      </BaseForm>
      <BaseText>
        Already have an account? Log in <BaseLink onClick={() => handleGoToLogin()}>here</BaseLink>.
      </BaseText>
    </BaseCard>
  );
}
