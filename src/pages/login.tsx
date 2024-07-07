"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ConnectRoninWalletButton from '../components/ConnectRoninWalletButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAddress = localStorage.getItem('roninAddress');
      if (storedAddress) {
        router.push('/dashboard');
      }
    }
  }, [router]);

  return (
    <Container>
      <Head>
        <title>Login com Ronin Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" gutterBottom>
          Conectar Ronin Wallet
        </Typography>
        <ConnectRoninWalletButton />
      </Box>
    </Container>
  );
};

export default Login;
