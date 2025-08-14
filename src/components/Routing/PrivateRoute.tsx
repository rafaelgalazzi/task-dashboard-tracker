import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';
import { PrivateNavbar } from '../Navbar/PrivateNavbar';
import { PrivateFooter } from '../Footer/PrivateFooter';

export function PrivateRoute() {
  const { session, isLoading, error } = useSession();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gradient-color1 to-gradient-color2">
      <PrivateNavbar />
      <main className="flex-1 px-4">
        <div className="mx-auto w-full max-w-5xl py-6">
          {isLoading && <LoadingSpinner />}
          {!isLoading && (error || !session) && <Navigate to="/login" replace />}
          {!isLoading && session && <Outlet />}
        </div>
      </main>
      <PrivateFooter />
    </div>
  );
}
