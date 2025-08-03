import { Navigate } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import ScreenLayout from '../Layout/ScreenLayout';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { session, isLoading, error } = useSession();

  if (isLoading)
    return (
      <ScreenLayout>
        <LoadingSpinner />
      </ScreenLayout>
    );

  if (error || !session) return <Navigate to="/login" replace />;

  return <>{children}</>;
}
