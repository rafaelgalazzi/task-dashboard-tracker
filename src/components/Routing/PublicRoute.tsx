import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';
import { PublicNavbar } from '../Navbar/PublicNavbar';
import { PublicFooter } from '../Footer/PublicFooter';

export function PublicRoute() {
  const { session, isLoading } = useSession();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gradient-color1 to-gradient-color2">
      <PublicNavbar />

      {/* Main content area */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {isLoading && <LoadingSpinner />}
          {!isLoading && session && <Navigate to="/home" replace />}
          {!isLoading && !session && <Outlet />}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
