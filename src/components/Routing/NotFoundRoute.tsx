import { Navigate } from 'react-router-dom';
import ScreenLayout from '../Layout/ScreenLayout';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';
import { useSession } from '../../hooks/auth/useSession';

export function NotFoundRoute() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <ScreenLayout>
        <LoadingSpinner />
      </ScreenLayout>
    );
  }

  return <Navigate to={session ? '/projects' : '/login'} replace />;
}
