import { IconButton } from '../Button/IconButton';
import BaseText from '../Text/BaseText';

interface PrivateNavbarProps {
  onLogout?: () => void;
  onToggleSidePanel?: (isOpen: boolean) => void;
  isPanelOpen: boolean;
}

export function PrivateNavbar(props: PrivateNavbarProps) {
  function handleUserOptions() {
    console.log('user options');
  }

  function handleSidePanel() {
    if (props.onToggleSidePanel) {
      props.onToggleSidePanel(!props.isPanelOpen);
    }
  }

  return (
    <nav className="bg-gradient-navbar text-white shadow-md">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <IconButton name="menu" size={20} color="white" circle onClick={handleSidePanel}></IconButton>
          <BaseText className="font-semibold mx-4 text-lg" justify="start">
            Task Tracker
          </BaseText>
        </div>

        <IconButton name="user" size={20} color="white" circle onClick={handleUserOptions}></IconButton>
        {/* menu items here */}
      </div>
    </nav>
  );
}
