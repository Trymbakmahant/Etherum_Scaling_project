"use client";
import style from "./communites.module.scss";
import { useEffect, useState, useRef } from "react";
import { Polybase } from "@polybase/client";
const page = () => {
  const [data, setdata] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const db = new Polybase({
    defaultNamespace:
      "pk/0xbbc1ff78605c9f8c178d474e3d66aca2512b2d59838fac927f23320f5b101fca1b7ed14f387e0ff09a0ded2f6468be24f87e23328a472e7692ae25dae8d4f120/PRACTICE",
  });

  const Communities = db.collection("Communities");

  async function GetRecord() {
    const records = await Communities.get();
    // console.log(records.data[0].data);
    setdata(records.data);
  }
  useEffect(() => {
    GetRecord();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setDataLoaded(true);
      console.log(data);
    }
  }, [data]);
  return (
    <div className={style.wraper}>
      {/* {console.log("consaole.llgohfiwoehjwo")}
      {alldata.length > 0 &&
        alldata.map((post) => {
          console.log("hello bhai sahab");
          return <p> {post.data.name}</p>;
        })} */}
      <p>{data && data[0].data}</p>
    </div>
  );
};

export default page;
