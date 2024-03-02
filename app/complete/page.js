import styles from "./complete.module.css";
import Complete from "@/components/Complete/Complete";
export default function Home() {
  return (
    <div className={styles.main}>
      <Complete />
    </div>
  );
}
