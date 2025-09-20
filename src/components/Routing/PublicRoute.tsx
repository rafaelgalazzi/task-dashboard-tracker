import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoadingSpinner } from '../Spinner/LoadingSpinner';
import { useSession } from '../../hooks/auth/useSession';
import bg1 from '../../assets/backgrounds/bg1.jpg';
import bg2 from '../../assets/backgrounds/bg2.jpg';
import bg3 from '../../assets/backgrounds/bg3.jpg';
import bg4 from '../../assets/backgrounds/bg4.jpg';
import bg5 from '../../assets/backgrounds/bg5.jpg';
import bg6 from '../../assets/backgrounds/bg6.jpg';
import bg7 from '../../assets/backgrounds/bg7.jpg';
import bg8 from '../../assets/backgrounds/bg8.jpg';
import bg9 from '../../assets/backgrounds/bg9.jpg';
import bg10 from '../../assets/backgrounds/bg10.jpg';
import bg11 from '../../assets/backgrounds/bg11.jpg';
import bg12 from '../../assets/backgrounds/bg12.jpg';

const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];

export function PublicRoute() {
  const { session, isLoading } = useSession();
  const [loaded, setLoaded] = useState(false);

  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  useEffect(() => {
    const img = new Image();
    img.src = randomBg;
    img.onload = () => setLoaded(true);
  }, [randomBg]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gradient-color1 to-gradient-color2 relative overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${randomBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <main className="relative flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {isLoading && <LoadingSpinner />}
          {!isLoading && session && <Navigate to="/projects" replace />}
          {!isLoading && !session && <Outlet />}
        </div>
      </main>
    </div>
  );
}
