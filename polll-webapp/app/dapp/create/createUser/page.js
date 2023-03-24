"use client";
import style from "./createUser.module.scss";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { Polybase } from "@polybase/client";
export default function UserPage() {
  const router = useRouter();
  const { address } = useAccount();
  const profile = useRef("");
  const id = address;
  const tagline = useRef("");
  const nickName = useRef("");
  async function handleSubmit() {
    const db = await new Polybase({
      defaultNamespace:
        "pk/0xbbc1ff78605c9f8c178d474e3d66aca2512b2d59838fac927f23320f5b101fca1b7ed14f387e0ff09a0ded2f6468be24f87e23328a472e7692ae25dae8d4f120/PRACTICE",
    });

    const Communities = await db.collection("User");
    const recordData = await Communities.create([
      id,
      nickName.current.value,
      profile.current.value,
      tagline.current.value,
    ]);
  }

  return (
    <>
      <div className={style.center}>
        <h1>Create your Profile</h1>
        <form>
          <div className={style.inputbox}>
            <input type="text" ref={nickName} required="required" />
            <span>Nick Name</span>
          </div>
          <div className={style.inputbox}>
            <input type="text" ref={profile} required="required" />
            <span>Profile Picture</span>
          </div>

          <div className={style.inputbox}>
            <input type="text" ref={tagline} required="required" />
            <span>tagline</span>
          </div>
          <div className={style.inputbox}>
            <input type="button" onClick={handleSubmit} value="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
