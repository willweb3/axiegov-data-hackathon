"use client";

import { useState, useEffect } from 'react';
import ConnectRoninWalletButton from '../components/ConnectRoninWalletButton';
import LogoutButton from '../components/LogoutButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAddress = localStorage.getItem('roninAddress');
      if (storedAddress) {
        setUserAddress(storedAddress);
      }
    }
  }, []);

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" gutterBottom>
          Conectar Ronin Wallet
        </Typography>
        {userAddress ? (
          <>
            <Typography variant="h6" gutterBottom>
              🎉 Ronin Wallet is connected, current address: {userAddress}
            </Typography>
            <LogoutButton />
          </>
        ) : (
          <ConnectRoninWalletButton />
        )}
      </Box>
    </Container>
  );
};

export default Home;
