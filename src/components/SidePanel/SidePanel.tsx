import type { IconName } from 'lucide-react/dynamic';
import BaseIcon from '../Icons/BaseIcons';
import BaseText from '../Text/BaseText';

interface SidePanelProps {
  className?: string;
  isOpen?: boolean;
}

const menus: { name: string; path: string; icon: IconName }[] = [
  { name: 'Tasks', path: '/tasks', icon: 'newspaper' },
  { name: 'Projects', path: '/projects', icon: 'folder-kanban' },
  { name: 'Profile', path: '/profile', icon: 'user' },
  { name: 'Settings', path: '/settings', icon: 'settings' },
];

export function SidePanel(props: SidePanelProps) {
  const SidePanelHtml = (
    <>
      <div className={`min-w-[250px] ${props.className} bg-[rgb(var(--card-bg-rgb)/0.72)] transition-all duration-300`}>
        {menus.map((menu) => {
          return (
            <div className="flex w-full items-center p-4 cursor-pointer transition-all duration-300 hover:bg-accent">
              <BaseIcon name={menu.icon} size={20} color="white" />
              <BaseText className="mx-4 text-lg" justify="start">
                {menu.name}
              </BaseText>
            </div>
          );
        })}
      </div>
    </>
  );
  

  return <>{props.isOpen && SidePanelHtml}</>;
}
