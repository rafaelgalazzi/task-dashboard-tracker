import { BaseInput } from '../../components/Form/BaseInput';
import BaseCard from '../../components/Layout/BaseCard';
import BaseText from '../../components/Text/BaseText';
import BaseButton from '../../components/Button/BaseButton';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseForm } from '../../components/Form/BaseForm';
import { useLogin } from '../../hooks/useAuth';
import { BaseLink } from '../../components/Text/BaseLink';

const schema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type FormData = z.infer<typeof schema>;

export function LoginScreen() {
  const { login, isPending, error, isSuccess } = useLogin();

  const {
    watch,
    register,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  function handleGoToCreateAccount() {
    navigate('/account/create');
  }

  async function handleLogin() {
    const isValid = await trigger();
    if (!isValid || isPending) {
      return;
    }
    login(
      {
        email: watch('email'),
        password: watch('password'),
      },
      {
        onSuccess: () => {
          navigate('/');
        },
      }
    );
  }

  return (
    <BaseCard>
      <BaseForm>
        <BaseText className="text-center text-2xl font-bold">Login</BaseText>
        <BaseInput
          label="Email"
          type="email"
          name="email"
          register={register}
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <BaseInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          register={register}
          error={errors.password?.message}
        />
        <div className="flex justify-center p-2">
          <BaseButton
            onClick={() => {
              handleLogin();
            }}
            disabled={isPending}
            loading={isPending || isSuccess}
          >
            Login
          </BaseButton>
        </div>
        {error && <BaseText className="text-error text-center">{error.message}</BaseText>}
        <BaseText className="text-center">
          Don't have an account? Sign up <BaseLink onClick={() => handleGoToCreateAccount()}>here</BaseLink>.
        </BaseText>
      </BaseForm>
    </BaseCard>
  );
}
