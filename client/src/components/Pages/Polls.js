import { Polybase } from "@polybase/client";

import { useRef } from "react";

const db = new Polybase({
  defaultNamespace:
    "pk/0xbbc1ff78605c9f8c178d474e3d66aca2512b2d59838fac927f23320f5b101fca1b7ed14f387e0ff09a0ded2f6468be24f87e23328a472e7692ae25dae8d4f120/PRACTICE",
});

export default function App() {
  const polltopic = useRef();
  const poll1 = useRef();
  const poll2 = useRef();

  const collectionReference = db.collection("User");
  async function createRecord() {
    // .create(args) args array is defined by the constructor fn
    const recordData = await collectionReference.create([
      "new-york",
      "heomewhog",
    ]);

    console.log(recordData);
  }

  return <div></div>;
}
