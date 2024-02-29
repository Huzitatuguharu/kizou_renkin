"use client";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// const { adress } = useWeb3ModalAccount();

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
// 2. Set chains
const testnet = {
  chainId: 80001,
  name: "Matic Testnet Mumbai",
  currency: "Matic",
  explorerUrl: "https://mumbai.polygonscan.com/",
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
};
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};
// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};
createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [testnet, mainnet],
  projectId,
  enableAnalytics: true,
  themeMode: "light", // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }) {
  return children;
}
