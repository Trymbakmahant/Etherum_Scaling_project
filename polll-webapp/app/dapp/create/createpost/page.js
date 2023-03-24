"use client";
import style from "./createPost.module.scss";
import { Polybase } from "@polybase/client";
import { useRef, useState } from "react";
const db = new Polybase({
  defaultNamespace:
    "pk/0xbbc1ff78605c9f8c178d474e3d66aca2512b2d59838fac927f23320f5b101fca1b7ed14f387e0ff09a0ded2f6468be24f87e23328a472e7692ae25dae8d4f120/PRACTICE",
});

const Communities = db.collection("Post");
function Page() {
  const inputArr = [
    {
      type: "text",
      id: 1,
      count: 0,
      value: "",
    },
  ];
  const name = useRef("");
  const profilepic = useRef("");
  const background = useRef("");
  const tagline = useRef("");
  const [arr, setArr] = useState(inputArr);
  const [count, setCount] = useState(1);
  /////////////////////////////////////////

  const addInput = () => {
    console.log(count);
    if (count > 3) {
      console.log(arr);
      alert("ruk ja bhai kita bnayega");
      return [];
    }
    const value = count + 1;
    setCount(value);
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
          count: count,
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  ///////////////////////////////////////////////////////////
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
      <h1>Create Post</h1>
      <form>
        <div className={style.inputbox}>
          <input type="text" ref={name} required="required" />
          <span>Title</span>
        </div>
        <div className={style.inputbox}>
          <input type="text" ref={profilepic} required="required" />
          <span>Image</span>
        </div>

        <div>
          {" "}
          {arr.map((item, i) => {
            return (
              <div className={style.addInput}>
                {" "}
                <input
                  onChange={handleChange}
                  value={item.value}
                  id={i}
                  type={item.type}
                  placeholder={`poll ${item.count + 1}`}
                  size="40"
                />
              </div>
            );
          })}
        </div>
        <div className={style.buttonis}>
          <button type="button" onClick={addInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              ></path>
            </svg>{" "}
            Add Polls
          </button>
        </div>
        <div className={style.inputbox}>
          <input type="button" onClick={handleSubmit} value="submit" />
        </div>
      </form>
    </div>
  );
}

export default Page;
