import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import ScreenLayout from '../Layout/ScreenLayout';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';
import { PublicNavbar } from '../Navbar/PublicNavbar';
import { PublicFooter } from '../Footer/PublicFooter';

export function PublicRoute() {
  const { session, isLoading } = useSession();

  if (isLoading)
    return (
      <ScreenLayout>
        <LoadingSpinner />
      </ScreenLayout>
    );

  if (session) return <Navigate to="/home" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-indigo-900">
      <PublicNavbar />

      {/* Center the content between header & footer */}
      <main className="flex-1 flex items-center justify-center px-4">
        {/* keep ScreenLayout simple: width container only */}
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
