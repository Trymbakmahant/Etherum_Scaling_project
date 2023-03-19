import { Polybase } from "@polybase/client";
import { Button, ButtonGroup, Center, Box } from "@chakra-ui/react";
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
  const PollonReference = db.collection("Poll");

  //this function helps to upload data of the user
  async function UploadprofileData() {
    const recordData = await collectionReference.create([
      "new-york",
      "heomewhog",
    ]);

    console.log(recordData);
  }

  // this helps to list all the  poll which is till now uploaded
  async function listRecords() {
    const records = await PollonReference.get();
    console.log(records);
  }

  //this helps retriving data of the user
  async function RetriveProfileData() {
    const { data, block } = await collectionReference.record("new-york").get();
    console.log(block);
  }

  return (
    <Center>
      <Box mr={4}>
        <Button onClick={UploadprofileData}>click to upload data</Button>
      </Box>
      <Box mr={4}>
        <Button onClick={RetriveProfileData}>click to retrive data</Button>
      </Box>
      <Box mr={4}>
        {" "}
        <Button>click to upload your poll</Button>
      </Box>{" "}
      <Box mr={4}>
        <Button>click to retrive all content of your poll </Button>
      </Box>
      <Box>
        {" "}
        <Button onClick={listRecords}>click to upload all polls</Button>
      </Box>
    </Center>
  );
}

// upload data
// profileimage  profilename  profilefollower
// retrive the uperdata

// upload polls
// topic  choise1 choise 2 choise3   likes
