import BaseText from "../Text/BaseText";

export function PublicNavbar() {
  return (
    <nav className="bg-gradient-navbar text-white shadow-md">
      <div className="max-w-7xl px-4 py-3 flex justify-between">
        <BaseText className="font-semibold text-lg">Task Tracker</BaseText>
        {/* menu items here */}
      </div>
    </nav>
  );
}
