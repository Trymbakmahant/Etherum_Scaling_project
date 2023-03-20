import Image from "next/image";
import { Rubik_80s_Fade } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const fonta = Rubik_80s_Fade({ subsets: ["latin"], weight: "400" });

export default function Home() {

  return (<>
 
  
    <main className={styles.main}>
      <div className={styles.txt}>
        <p className={fonta.className}>Polll</p>
      <Link href="/polls">
        click
       </Link>
      </div>
    </main>
    </>
  );
}
