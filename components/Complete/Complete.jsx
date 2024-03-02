"use client";
import Link from "next/link";
import styles from "./Complete.module.css";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useDisconnect } from "@web3modal/ethers/react";
import React, { useState } from "react";

export default function Complete() {
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
          </div>
        ) : (
          <></>
        )}
      </div>
      <Link className={styles.button} href="/">
        トップへ
      </Link>
    </main>
  );
}
