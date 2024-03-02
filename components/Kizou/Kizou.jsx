"use client";
import Link from "next/link";
import styles from "./Kizou.module.css";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useDisconnect } from "@web3modal/ethers/react";
import React, { useState } from "react";
export default function Kizou() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  // 4. Use modal hook
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  console.log(isConnected);
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  // 全てのチェックボックスがチェックされているかを判定する関数
  const allChecked = Object.values(checkboxes).every(Boolean);

  // チェックボックスの状態を更新する関数
  const handleChange = (event) => {
    setCheckboxes({ ...checkboxes, [event.target.name]: event.target.checked });
  };
  return (
    <main className={styles.mainContainer}>
      <div>
        {isConnected ? (
          <div className={styles.innerContainer}>
            <h1 className={styles.h1}>登録</h1>
            <div className={styles.w3mButton}>
              <w3m-account-button balance="show" />
            </div>
            <form className={styles.form} action="/complete">
              <section className={styles.sectionBox}>
                <h2 className={styles.sectionBoxTitle}>1.チェーン選択</h2>
                <w3m-network-button />
                <div className={styles.chainList}>
                  <p>対応チェーン</p>
                  <ul>
                    <li>Mumbai（Testnet）</li>
                    <li>Ethereum</li>
                  </ul>
                </div>
              </section>
              <section className={styles.sectionBox}>
                <h2 className={styles.sectionBoxTitle}>2.送信先の選択</h2>
                <div className={styles.addressList}>
                  <label className={styles.radio}>
                    <input type="radio" name="fruits" value="apple" required />
                    とあるDAO
                  </label>
                  <label className={styles.radio}>
                    <input type="radio" name="fruits" value="orange" />
                    ウクライナDAO
                  </label>
                  <label className={styles.radio}>
                    <input type="radio" name="fruits" value="kizou" />
                    寄贈錬金にお任せ
                  </label>
                </div>
              </section>
              <section className={styles.sectionBox}>
                <h2 className={styles.sectionBoxTitle}>
                  3.メールアドレスの登録
                </h2>
                <p className={styles.subText}>
                  登録したアドレスに年に1回、リマインドメールを送信します
                </p>
                <div className={styles.addressList}>
                  <input
                    type="email"
                    id="email"
                    size="30"
                    placeholder="sample@kizou.com"
                  ></input>
                </div>
              </section>

              <section className={styles.sectionBox}>
                <h2 className={styles.sectionBoxTitle}>4.注意事項の確認</h2>
                <div className={styles.termsList}>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="checkbox1"
                      checked={checkboxes.checkbox1}
                      onChange={handleChange}
                    />
                    年に1回、Walletを接続して生きていることを教えて下さい
                  </label>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="checkbox2"
                      checked={checkboxes.checkbox2}
                      onChange={handleChange}
                    />
                    最後のWalletを接続から1年と1ヶ月後に資産を自動で寄贈します
                  </label>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="checkbox3"
                      checked={checkboxes.checkbox3}
                      onChange={handleChange}
                    />
                    ご自身で責任を持ってサービスをご利用ください
                  </label>
                </div>
              </section>
              <section className={styles.sectionBox}>
                <p className={styles.subText}>
                  注意事項すべてにチェックを入れて登録してください
                </p>
                <button
                  disabled={!allChecked}
                  className={styles.button}
                  type="submit"
                >
                  寄贈錬金に登録
                </button>
              </section>
            </form>
          </div>
        ) : (
          <div className={styles.innerContainer}>
            <h1 className={styles.h1}>寄贈錬金</h1>
            <p className={styles.subText}>死んだときに自動で資産を寄贈します</p>

            <button onClick={() => open()} className={styles.button}>
              Walletを接続する
            </button>
            {/* <w3m-button label="Walletを接続" /> */}
            <a
              href="https://huzitatuguharu.github.io/countdown_2/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkText}
            >
              余命までの時間を調べる
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
