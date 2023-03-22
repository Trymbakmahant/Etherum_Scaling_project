"use client";

import styles from "./browse.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export const metadata = {
  title: "PolIl dApp",
  description: "Its a Opinion based Social media dApp",
};

export default function Dapp() {
  const router = useRouter();
  const { address } = useAccount();

  return (
    <>
      <div className={styles.wraper}>
        <p>Browse Page 👑</p>
        <ConnectButton accountStatus={"full"} />
      </div>
    </>
  );
}
