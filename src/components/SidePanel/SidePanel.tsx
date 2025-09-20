import type { IconName } from 'lucide-react/dynamic';
import BaseIcon from '../Icons/BaseIcons';
import BaseText from '../Text/BaseText';
import { useNavigate } from 'react-router-dom';
import { useScreen } from '../../hooks/ui/useScreen';
import { BaseDropdown } from '../DropDown/BaseDropDown';
import { useLogout } from '../../hooks/auth/useLogout';

interface SidePanelProps {
  className?: string;
  isOpen: boolean;
  onToggleSidePanel?: (isOpen: boolean) => void;
}

const menus: { name: string; path: string; icon: IconName }[] = [
  { name: 'Projects', path: '/projects', icon: 'folder-kanban' },
  { name: 'Tasks', path: '/tasks', icon: 'newspaper' },
  { name: 'Profile', path: '/profile', icon: 'user' },
  { name: 'Settings', path: '/settings', icon: 'settings' },
];

export function SidePanel(props: SidePanelProps) {
  const { isMobile } = useScreen();
  const navigate = useNavigate();
  const { logout } = useLogout();

  function handleLogout() {
    logout(undefined, {
      onSuccess: () => {
        navigate('/login');
      },
    });
  }

  const SidePanelHtml = (
    <>
      <div className={`min-w-[250px] ${props.className} bg-[rgb(var(--card-bg-rgb)/0.72)] transition-all duration-300`}>
        {menus.map((menu, index) => {
          return (
            <div
              key={index}
              className="flex w-full items-center p-4 cursor-pointer transition-all duration-300 hover:bg-accent"
              onClick={() => navigate(menu.path)}
            >
              <BaseIcon name={menu.icon} size={20} color="white" />
              <BaseText className="mx-4 text-lg" justify="start">
                {menu.name}
              </BaseText>
            </div>
          );
        })}
        <div
          className="flex w-full items-center p-4 cursor-pointer transition-all duration-300 hover:bg-accent"
          onClick={handleLogout}
        >
          <BaseIcon name="log-out" size={20} color="white" />
          <BaseText className="mx-4 text-lg" justify="start">
            Logout
          </BaseText>
        </div>
      </div>
    </>
  );

  const menuHtml = (
    <BaseDropdown isOpen={props.isOpen} align="left">
      {menus.map((menu, index) => {
        return (
          <div
            key={index}
            className="flex w-full items-center p-4 cursor-pointer transition-all duration-300 hover:bg-accent"
            onClick={() => navigate(menu.path)}
          >
            <BaseIcon name={menu.icon} size={20} color="white" />
            <BaseText className="mx-4 text-lg" justify="start">
              {menu.name}
            </BaseText>
          </div>
        );
      })}
      <div
        className="flex w-full items-center p-4 cursor-pointer transition-all duration-300 hover:bg-accent"
        onClick={handleLogout}
      >
        <BaseIcon name="log-out" size={20} color="white" />
        <BaseText className="mx-4 text-lg" justify="start">
          Logout
        </BaseText>
      </div>
    </BaseDropdown>
  );

  return <>{props.isOpen && !isMobile ? SidePanelHtml : menuHtml}</>;
}
