import Image from "next/image";
import styles from "./page.module.css";
import { TextComponent } from '@repo/ui/index'
export default function Home() {
  return (
    <main className={styles.main}>
      <TextComponent content="Hello World"/>
    </main>
  );
}
