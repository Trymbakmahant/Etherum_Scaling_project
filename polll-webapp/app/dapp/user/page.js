"use client";
import styles from "./user.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserPage() {
  const router = useRouter();

  return (
    <>
      <div className={styles.wraper}>
        <p>User Page</p>
      </div>
    </>
  );
}
