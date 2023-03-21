"use client";
import styles from "./create.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreatorPage() {
  const router = useRouter();

  return (
    <>
      <div className={styles.wraper}>
        <p>Creation Area 🚧</p>
        <Link href={"/createpost"}>Create Post</Link>
        <Link href={"/createcommunity"}>Create Commu</Link>
      </div>
    </>
  );
}
