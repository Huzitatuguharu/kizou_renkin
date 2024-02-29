import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function Web3ModalAccount() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>{address}</div>;
}
