import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi'

export default function ConnectButton3() {
  const { open, close } = useWeb3Modal()
  const { disconnect } = useDisconnect()
  const { address } = useAccount()

  const toggleConnect = () => {
    if (address) {
      disconnect(); 
      open();  
    } else {
      open();  
    }
  };

  return (
    <>
      <button onClick={toggleConnect}>
        {address ? 'Disconnect' : 'Open Connect Modal'}
      </button>
      <div>{address}</div>
    </>
  )
}
