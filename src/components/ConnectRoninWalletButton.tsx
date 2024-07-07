"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { WalletSDK } from '@roninnetwork/wallet-sdk';

const ConnectRoninWalletButton = () => {
  const [userAddress, setUserAddress] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAddress = localStorage.getItem('roninAddress');
      if (storedAddress) {
        setUserAddress(storedAddress);
      }
    }
  }, []);

  const checkRoninInstalled = () => {
    if (typeof window !== 'undefined' && 'ronin' in window) {
      return true;
    }

    if (typeof window !== undefined) {
      window.open('https://wallet.roninchain.com', '_blank');
    }
    return false;
  };

  const connectRoninWallet = async () => {
    if (typeof window !== undefined) {
      const sdk = new WalletSDK();
      await sdk.connectInjected();

      const isInstalled = checkRoninInstalled();
      if (!isInstalled) {
        return;
      }

      const accounts = await sdk.requestAccounts();
      if (accounts && accounts[0] !== undefined) {
        setUserAddress(accounts[0]);
        localStorage.setItem('roninAddress', accounts[0]);
        router.push('/dashboard'); // Redirecionar para o dashboard após login bem-sucedido
      }
    }
  };

  return (
    <div>
      {userAddress === undefined ? (
        <button onClick={connectRoninWallet}>Connect Ronin Wallet</button>
      ) : (
        <div>🎉 Ronin Wallet is connected, current address: {userAddress}</div>
      )}
    </div>
  );
};

export default ConnectRoninWalletButton;
