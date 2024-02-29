"use client";
import styles from "./connect.module.css";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useDisconnect } from "@web3modal/ethers/react";

export default function ConnectButton() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  // 4. Use modal hook
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  console.log(isConnected);

  return (
    <section className={styles.box}>
      <h1 className={styles.h1}>Walletを接続してください</h1>

      <div>
        {isConnected ? (
          <div className={styles.box}>
            <p>Signature: {address}</p>
            <w3m-network-button />
            <w3m-account-button />
            <button onClick={() => disconnect()} className={styles.button}>
              切断
            </button>
          </div>
        ) : (
          <div className={styles.box}>
            <w3m-button label="Walletを接続" />
          </div>
        )}
      </div>
    </section>
  );
}
