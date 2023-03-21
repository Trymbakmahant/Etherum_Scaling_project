"use client";

import styles from "./browse.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dapp() {
  const router = useRouter();

  return (
    <>
      <div className={styles.wraper}>
        <p>Browse Page 👑</p>
      </div>
    </>
  );
}
