import BaseCard from '../../components/Layout/BaseCard';
import { BaseLink } from '../../components/Text/BaseLink';
import BaseText from '../../components/Text/BaseText';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useConfirmEmail, useResendEmail } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { BaseInput } from '../../components/Form/BaseInput';
import { BaseForm } from '../../components/Form/BaseForm';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import BaseButton from '../../components/Button/BaseButton';
import { useSnackbar } from '../../hooks/useSnackbar';

const schema = z.object({
  email: z.string().email('Invalid email address.'),
});

type FormData = z.infer<typeof schema>;

export function ConfirmAccount() {
  const navigate = useNavigate();
  const { confirmEmail, confirmEmailError } = useConfirmEmail();
  const { resendEmail } = useResendEmail();
  const { showSnackbar } = useSnackbar();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function handleResendEmail() {
    const isValid = await trigger();
    if (!isValid) {
      return;
    }
    const { email } = getValues();
    resendEmail(
      { email },
      {
        onSuccess: () => {
          showSnackbar({ message: 'A confirmation email has been sent to your email.', type: 'success' });
        },
        onError: (error) => {
          console.log(error);
          showSnackbar({ message: 'Something went wrong', type: 'error' });
        },
      }
    );
  }

  useEffect(() => {
    function handleConfirmEmail(token: string) {
      confirmEmail({ token });
    }
    if (token) {
      handleConfirmEmail(token);
    }
  }, [confirmEmail, token]);

  function handleGoToLogin() {
    navigate('/login');
  }

  if (confirmEmailError) {
    return (
      <BaseCard className="min-h-[400px] flex flex-col justify-center">
        <BaseText className="text-2xl font-bold">Your Account has not been confirmed!</BaseText>
        <BaseText className="py-4">Type your email to resend the confirmation email</BaseText>
        <BaseForm>
          <BaseInput
            type="email"
            name="email"
            placeholder="Enter your email"
            register={register}
            error={errors.email?.message}
          />
        </BaseForm>
        <div className="flex justify-center py-4">
          <BaseButton onClick={handleResendEmail}>Resend Email</BaseButton>
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard className="min-h-[400px] flex flex-col justify-center">
      <BaseText className="text-2xl font-bold">Your Account has been confirmed!</BaseText>
      <BaseText className="py-4">
        <BaseLink onClick={handleGoToLogin}>Go to Login</BaseLink>
      </BaseText>
    </BaseCard>
  );
}
