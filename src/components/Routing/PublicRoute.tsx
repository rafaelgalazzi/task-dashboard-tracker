import { Navigate } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import ScreenLayout from '../Layout/ScreenLayout';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';

interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { session, isLoading } = useSession();

  if (isLoading)
    return (
      <ScreenLayout>
        <LoadingSpinner />
      </ScreenLayout>
    );

  if (session) return <Navigate to="/home" replace />;

  return <>{children}</>;
}
