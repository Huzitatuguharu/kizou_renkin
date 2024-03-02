import Image from "next/image";
import styles from "./page.module.css";
import Kizou from "@/components/Kizou/Kizou";
export default function Home() {
  return (
    <div className={styles.main}>
      <Kizou />
    </div>
  );
}
