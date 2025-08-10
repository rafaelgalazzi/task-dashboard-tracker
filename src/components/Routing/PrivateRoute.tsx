import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import ScreenLayout from '../Layout/ScreenLayout';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';
import { PrivateNavbar } from '../Navbar/PrivateNavbar';
import { PrivateFooter } from '../Footer/PrivateFooter';

export function PrivateRoute() {
  const { session, isLoading, error } = useSession();

  if (isLoading)
    return (
      <ScreenLayout>
        <LoadingSpinner />
      </ScreenLayout>
    );

  if (error || !session) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-indigo-900">
      <PrivateNavbar />

      {/* Take remaining space; top-aligned, but centered horizontally */}
      <main className="flex-1 px-4">
        <div className="mx-auto w-full max-w-5xl py-6">
          <Outlet />
        </div>
      </main>

      <PrivateFooter />
    </div>
  );
}
