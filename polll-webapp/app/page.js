"use client";
import styles from "./page.module.scss";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

function connectUser() {
  console.log("Connect");
}

export default function Home() {
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
          <div onClick={() => connectUser()} className={styles.loginBtn}>
            Get Started
          </div>
        </div>
      </div>
    </>
  );
}
