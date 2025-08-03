export interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function BaseButton({
  children,
  onClick,
  disabled,
}: BaseButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!disabled) {
      onClick();
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="bg-white p-2 text-dark border rounded-md min-w-[150px] cursor-pointer hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300"
    >
      {children}
    </button>
  );
}
