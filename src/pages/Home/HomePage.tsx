import { useNavigate } from 'react-router-dom';
import BaseCard from '../../components/Layout/BaseCard';
import GridLayout from '../../components/Layout/GridLayout';
import BaseText from '../../components/Text/BaseText';
import { useLogout } from '../../hooks/useAuth';

export function HomePage() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  function handleLogout() {
    logout(undefined, {
      onSuccess: () => {
        navigate('/login');
      },
    });
  }

  return (
    <div>
      <BaseText className="text-2xl font-bold">Home Dashboard</BaseText>
      <GridLayout className="mt-4">
        <BaseCard key="Logout" className="cursor-pointer" hoverWithGlow onClick={handleLogout}>
          <BaseText className="text-lg">Logout</BaseText>
        </BaseCard>
      </GridLayout>
    </div>
  );
}
