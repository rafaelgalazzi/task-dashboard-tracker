import { BaseInput } from '../../components/Form/BaseInput';
import BaseCard from '../../components/Layout/BaseCard';
import ScreenLayout from '../../components/Layout/ScreenLayout';
import BaseText from '../../components/Text/BaseText';
import BaseButton from '../../components/Button/BaseButton';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseForm } from '../../components/Form/BaseForm';

const schema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type FormData = z.infer<typeof schema>;

export default function LoginScreen() {
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
    if (!isValid) {
      return;
    }
  }

  return (
    <ScreenLayout>
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
              disabled={!watch('email') || !watch('password')}
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </BaseButton>
          </div>
          <BaseText className="text-center">
            Don't have an account? Sign up{' '}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => handleGoToCreateAccount()}
            >
              here
            </span>
            .
          </BaseText>
        </BaseForm>
      </BaseCard>
    </ScreenLayout>
  );
}
