import "./globals.css";
import styles from "./page.module.css";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import { Web3ModalProvider } from "@/context";

export const gothic = Zen_Kaku_Gothic_Antique({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "寄贈錬金",
  description: "寄贈錬金です",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={gothic.className}>
        <sapn className={styles.bigText}>寄贈錬金</sapn>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
