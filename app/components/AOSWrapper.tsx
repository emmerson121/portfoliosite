'use client';

import { useEffect, ReactNode } from 'react';
import AOS from 'aos';


interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
