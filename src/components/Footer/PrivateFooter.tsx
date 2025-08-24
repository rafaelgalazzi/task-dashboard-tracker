import BaseText from '../Text/BaseText';

export function PrivateFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-footer text-white py-3 shadow-glow">
      <BaseText className="max-w-7xl px-2 text-sm" justify="start">
        © {year} Rafael Galazzi. All rights reserved.
      </BaseText>
    </footer>
  );
}
