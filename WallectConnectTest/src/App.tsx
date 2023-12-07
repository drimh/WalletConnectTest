import './App.css'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { walletConnectProvider } from '@web3modal/wagmi'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet } from 'viem/chains'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import ConnectButton from "../components/ConnectButton"; 

const projectId = import.meta.env.VITE_PROJECT_ID; 
export const apikey = import.meta.env.VITE_ALCHEMY_KEY;

const { chains, publicClient } = configureChains(
  [mainnet],
  [walletConnectProvider({ projectId }), publicProvider()]
)

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
  ],
  publicClient
})

createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
       <ConnectButton />
    </WagmiConfig>
  )
}

export default App
