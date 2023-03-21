"use client";
import style from "./create.module.scss";
import { Polybase } from "@polybase/client";
import { useRef } from "react";
const db = new Polybase({
  defaultNamespace:
    "pk/0xbbc1ff78605c9f8c178d474e3d66aca2512b2d59838fac927f23320f5b101fca1b7ed14f387e0ff09a0ded2f6468be24f87e23328a472e7692ae25dae8d4f120/PRACTICE",
});

const Communities = db.collection("Communities");
function Page() {
  const name = useRef("");
  const profilepic = useRef("");
  const background = useRef("");
  const tagline = useRef("");

  async function handleSubmit() {
    try {
      console.log(name.current.value);
      const recordData = await Communities.create([
        name.current.value,
        name.current.value,
        profilepic.current.value,
        background.current.value,
        tagline.current.value,
      ]);

      console.log(recordData);
    } catch (e) {
      console.log(e);
    }
  }
  async function getRecord() {
    const { data, block } = await Communities.get();
    alert(data);
    console.log(data);
  }
  return (
    <div className={style.center}>
      <h1>Create your Community</h1>
      <form>
        <div className={style.inputbox}>
          <input type="text" ref={name} required="required" />
          <span>Community Name</span>
        </div>
        <div className={style.inputbox}>
          <input type="text" ref={profilepic} required="required" />
          <span>Profile Picture</span>
        </div>
        <div className={style.inputbox}>
          <input type="text" ref={background} required="required" />
          <span>Background Picture</span>
        </div>
        <div className={style.inputbox}>
          <input type="text" ref={tagline} required="required" />
          <span>tagline</span>
        </div>
        <div className={style.inputbox}>
          <input type="button" onClick={handleSubmit} value="submit" />
        </div>
      </form>

      <div>
        <button onClick={getRecord}>click to get data</button>
      </div>
    </div>
  );
}

export default Page;
