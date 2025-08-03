import BaseText from '../Text/BaseText';
import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

export interface BaseInputProps<T extends FieldValues> {
  name?: Path<T>;
  register?: UseFormRegister<T>;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  label?: string;
  autocomplete?: string;
  error?: string;
}

export function BaseInput<T extends FieldValues>({
  name,
  register,
  value,
  onChange,
  label,
  placeholder,
  type,
  autocomplete = 'off',
  error,
}: BaseInputProps<T>) {
  const inputProps =
    register && name
      ? { ...register(name) }
      : {
          value,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            onChange?.(e.target.value),
        };

  return (
    <div className="base-input-container py-2">
      {label && <label className="base-input-label">{label}</label>}
      <input
        type={type || 'text'}
        placeholder={placeholder || 'Enter text'}
        className="bg-white p-2 text-dark border rounded-md w-full"
        aria-invalid={!!error}
        autoComplete={autocomplete}
        {...inputProps}
      />
      {error && (
        <BaseText className="text-error text-sm mt-1 px-1" justify='start'>{error}</BaseText>
      )}
    </div>
  );
}
