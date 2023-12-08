import '../src/App.css'; 
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnectProvider } from '@web3modal/wagmi';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from 'viem/chains';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import ConnectButton from '../components/ConnectButton';
import purifyLogo from '../image/purifyLogo.png';
import ConnectButton2 from '../components/ConnectButton2';
import TestButton3 from '../components/ConnectButton3'; 

const projectId = import.meta.env.VITE_PROJECT_ID;
export const apikey = import.meta.env.VITE_ALCHEMY_KEY;

const { chains, publicClient } = configureChains(
  [mainnet],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
  ],
  publicClient,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeVariables: {
    '--w3m-accent': '#06F',
    '--w3m-border-radius-master': '1.25rem',
  },
});

const appBox = {
  backgroundColor: 'skyblue', //구분용 임시 색상
  width: '16.875rem',
  height: '28.125rem',
  marginTop:'4rem' //구분용 임시 margin
};

const logoImg = {
  marginTop: '0.62rem',
  marginBottom: '2.25rem',
  color: '#444',
  fontFamily: 'Audiowide',
  fontSize: '1.5rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
};


function App() {
  return (
    <div>
      <div style={appBox}>
        <img src={purifyLogo} style={{ marginTop: '5.56rem' }} />
        <p style={logoImg}>purify</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WagmiConfig config={wagmiConfig}>
            <ConnectButton />
          </WagmiConfig>
        </div>
      </div>
      <div style={appBox}>
        <WagmiConfig config={wagmiConfig}>
          <ConnectButton2 />
        </WagmiConfig>
      </div>
      <div style={appBox}>
        <WagmiConfig config={wagmiConfig}>
          <TestButton3 />
        </WagmiConfig>
      </div>
    </div>
  );
}

export default App;
