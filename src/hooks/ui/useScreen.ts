import { useState, useEffect } from 'react';

export function useScreen() {
  const getIsMobile = () => window.innerWidth < 640; // Tailwind "sm"
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
  };
}
