import { Navigate } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import ScreenLayout from '../Layout/ScreenLayout';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';

export function NotFoundRoute() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <ScreenLayout>
        <LoadingSpinner />
      </ScreenLayout>
    );
  }

  return <Navigate to={session ? '/home' : '/login'} replace />;
}
