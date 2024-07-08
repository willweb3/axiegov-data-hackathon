"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import TreasuryOutflowsChart from '../../components/TreasuryOutflowsChart';
import DashboardLayout from '../../components/DashboardLayout';

const Outflows = () => {
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
        Saídas do Tesouro
      </Typography>
      <TreasuryOutflowsChart />
    </DashboardLayout>
  );
};

export default Outflows;
