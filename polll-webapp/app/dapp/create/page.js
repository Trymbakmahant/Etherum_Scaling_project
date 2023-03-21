"use client";
import styles from "./create.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatorPage() {
  const router = useRouter();

  return (
    <>
      <div className={styles.wraper}>
        <p>Creation Area 🚧</p>
      </div>
    </>
  );
}
