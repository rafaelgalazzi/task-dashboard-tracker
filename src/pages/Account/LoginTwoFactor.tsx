import { useNavigate } from 'react-router-dom';
import BaseButton from '../../components/Button/BaseButton';
import { BaseForm } from '../../components/Form/BaseForm';
import BaseText from '../../components/Text/BaseText';
import BaseCard from '../../components/Layout/BaseCard';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseValidationCodeInput } from '../../components/Form/BaseValidationCodeInput';
import { useState } from 'react';
import { BaseLink } from '../../components/Text/BaseLink';

const schema = z.object({
  code: z
    .string()
    .min(6, 'Code must be 6 digits')
    .max(6, 'Code must be 6 digits')
    .regex(/^\d{6}$/, 'Digits only'),
});
type FormData = z.infer<typeof schema>;

export function LoginTwoFactor() {
  const [error] = useState({ message: '' });
  const navigate = useNavigate();

  const { getValues, control, trigger } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { code: '' },
    mode: 'onChange',
  });

  function handleGoToLogin() {
    navigate('/login');
  }

  async function handleConfirmEmail() {
    const isValid = await trigger();
    if (!isValid) {
      return;
    }
    console.log(getValues('code'));
  }

  return (
    <BaseCard>
      <BaseText className="text-2xl font-bold">Type the verification code</BaseText>
      <BaseForm>
        <Controller
          name="code"
          control={control}
          rules={{
            required: 'Enter the 6-digit code',
            minLength: { value: 6, message: 'Code must be 6 digits' },
            maxLength: { value: 6, message: 'Code must be 6 digits' },
            pattern: { value: /^\d{6}$/, message: 'Digits only' },
          }}
          render={({ field, fieldState }) => (
            <BaseValidationCodeInput
              value={field.value}
              onChange={field.onChange}
              length={6}
              label="Verification code"
              error={fieldState.error?.message}
              autoFocusFirstEmpty
              onComplete={() => handleConfirmEmail()}
            />
          )}
        />
        <div className="flex justify-center items-center p-2">
          <BaseButton onClick={() => handleConfirmEmail()}>Confirm Account</BaseButton>
        </div>
        {error && <BaseText className="text-error text-center">{error.message}</BaseText>}
      </BaseForm>
      <BaseText className="pt-4">
        Not received the code? <BaseLink onClick={() => handleGoToLogin()}>Click to resend</BaseLink>.
      </BaseText>
    </BaseCard>
  );
}
