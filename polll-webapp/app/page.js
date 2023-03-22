"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();
  const { address, isDisconnected, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push("/dapp");
    }
  }, [address]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.left}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.right}>
            <div className={styles.logo}>
              <Spline scene="https://prod.spline.design/ZNMxunX1ikfomgqv/scene.splinecode" />
            </div>
            <div className={styles.menu}>
              <p>Menu</p>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <ConnectButton />
        </div>
      </div>
    </>
  );
}
