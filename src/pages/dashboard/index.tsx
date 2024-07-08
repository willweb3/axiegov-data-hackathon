"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import DashboardLayout from '../../components/DashboardLayout';

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
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Dashboard Principal
      </Typography>
      <Typography variant="body1">
        Selecione uma opção no menu para visualizar os dados do tesouro.
      </Typography>
    </DashboardLayout>
  );
};

export default Dashboard;
