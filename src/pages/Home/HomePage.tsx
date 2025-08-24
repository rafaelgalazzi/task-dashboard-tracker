import { useNavigate } from 'react-router-dom';
import BaseCard from '../../components/Layout/BaseCard';
import GridLayout from '../../components/Layout/GridLayout';
import BaseText from '../../components/Text/BaseText';
import { useLogout } from '../../hooks/useAuth';

export function HomePage() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const menus = [
    { name: 'Tasks', path: '/tasks' },
    { name: 'Projects', path: '/projects' },
    { name: 'Profile', path: '/profile' },
    { name: 'Settings', path: '/settings' },
  ];

  function handleLogout() {
    logout(undefined, {
      onSuccess: () => {
        navigate('/login');
      },
    });
  }

  return (
    <BaseCard>
      <BaseText className="text-2xl font-bold">Home Dashboard</BaseText>
      <GridLayout className="mt-4">
        {menus.map((menu) => (
          <BaseCard key={menu.name} className="cursor-pointer" hoverWithGlow onClick={() => navigate(menu.path)}>
            <BaseText className="text-lg">{menu.name}</BaseText>
          </BaseCard>
        ))}
        <BaseCard key="Logout" className="cursor-pointer" hoverWithGlow onClick={handleLogout}>
          <BaseText className="text-lg">Logout</BaseText>
        </BaseCard>
      </GridLayout>
    </BaseCard>
  );
}
