"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAddress = localStorage.getItem('roninAddress');
      if (!storedAddress) {
        router.push('/login');
      }
    }
  }, [router]);

  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      <p>Você está conectado à Ronin Wallet.</p>
    </div>
  );
};

export default Dashboard;
