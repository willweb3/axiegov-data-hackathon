"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import TreasuryInflowsChart from '../../components/TreasuryInflowsChart';
import DashboardLayout from '../../components/DashboardLayout';

const Inflows = () => {
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
        Entradas do Tesouro
      </Typography>
      <TreasuryInflowsChart />
    </DashboardLayout>
  );
};

export default Inflows;
