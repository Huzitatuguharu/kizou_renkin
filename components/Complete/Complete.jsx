"use client";
import Link from "next/link";
import styles from "./Complete.module.css";
import { useWeb3ModalAccount, useDisconnect } from "@web3modal/ethers/react";
import React from "react";

// disconnect();
export default function Complete() {
  const { disconnect } = useDisconnect();
  const { isConnected } = useWeb3ModalAccount();
  return (
    <main className={styles.mainContainer}>
      <div>
        {isConnected ? (
          <div className={styles.innerContainer}>
            <h1 className={styles.h1}>完了</h1>
            <p className={styles.subText}>
              寄贈錬金に登録できました。
              <br />
              年1回接続して生きていること教えて下さい。
            </p>
            <div className={styles.w3mButton}>
              <w3m-account-button balance="show" />
            </div>
            <button onClick={() => disconnect()} className={styles.button}>
              Walletを切断する
            </button>
          </div>
        ) : (
          <section className={styles.innerContainer}>
            <h1 className={styles.h1}>寄贈錬金</h1>
            <Link className={styles.button} href="/">
              トップへ
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}
