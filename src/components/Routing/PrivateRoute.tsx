import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../../hooks/useAuth';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';
import { PrivateNavbar } from '../Navbar/PrivateNavbar';
import { PrivateFooter } from '../Footer/PrivateFooter';
import { SidePanel } from '../SidePanel/SidePanel';
import { useState } from 'react';
import { useScreen } from '../../hooks/useScreen';

export function PrivateRoute() {
  const { session, isLoading, error } = useSession();
  const { isMobile } = useScreen();

  const [toggleSidePanel, setToggleSidePanel] = useState(!isMobile);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gradient-color1 to-gradient-color2">
      <PrivateNavbar isPanelOpen={toggleSidePanel} onToggleSidePanel={setToggleSidePanel} />
      <main className="flex-1 flex">
        <SidePanel isOpen={toggleSidePanel} />
        <div className="mx-auto w-full p-4">
          {isLoading && <LoadingSpinner />}
          {!isLoading && (error || !session) && <Navigate to="/login" replace />}
          {!isLoading && session && <Outlet />}
        </div>
      </main>
      <PrivateFooter />
    </div>
  );
}
