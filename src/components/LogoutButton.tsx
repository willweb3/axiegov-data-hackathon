"use client";

import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('roninAddress');
      router.reload(); // Recarregar a página após logout
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
