import BaseText from '../Text/BaseText';

export function PrivateNavbar() {
  return (
    <nav className="bg-gradient-navbar text-white shadow-glow">
      <div className="max-w-7xl px-4 py-3 flex justify-between items-center">
        <BaseText className="font-bold text-lg" justify="start">
          Task Tracker
        </BaseText>
        {/* menu items here */}
      </div>
    </nav>
  );
}
