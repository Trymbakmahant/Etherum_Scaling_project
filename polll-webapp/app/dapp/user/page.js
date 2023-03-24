"use client";
import styles from "./user.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { Polybase } from "@polybase/client";

export default function UserPage() {
  const router = useRouter();
  const { address } = useAccount();
  const [flag, setFlag] = useState(false);
  const [useris, setUseris] = useState([]);
  const db = new Polybase({
    defaultNamespace:
      "pk/0xbbc1ff78605c9f8c178d474e3d66aca2512b2d59838fac927f23320f5b101fca1b7ed14f387e0ff09a0ded2f6468be24f87e23328a472e7692ae25dae8d4f120/PRACTICE",
  });

  const User = db.collection("User");

  async function GetRecord() {
    const records = await User.record(address).get();

    if (records.data.length == 0) {
      setFlag(true);
    }
    setUseris(records.data);
    console.log(records.data);
  }

  useEffect(() => {
    GetRecord();
  }, []);
  async function CheckUser() {}
  useEffect(() => {
    if (flag) {
      alert("sorry you don't have any account . Pleasse create a account!");
      router.push("dapp/create/createUser");
    }
  }, [flag]);
  return (
    <>
      <div className={styles.wraper}>
        <p>User Page</p>
        <p>👑{address.length > 0 && address}👑</p>
        <p> your name is {useris.name}</p>;
      </div>
    </>
  );
}
