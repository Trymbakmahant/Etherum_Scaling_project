"use client";
import styles from "./user.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function UserPage() {
  const router = useRouter();
  const { address } = useAccount();

  return (
    <>
      <div className={styles.wraper}>
        <p>User Page</p>
        <p>👑{address}👑</p>
      </div>
    </>
  );
}
