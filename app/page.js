import Image from "next/image";
import styles from "./page.module.css";
import Connect from "@/components/Connect";
import Web3ModalAccount from "@/components/Web3ModalAccount";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Connect />
        {/* <Web3ModalAccount /> */}
      </div>
    </main>
  );
}
