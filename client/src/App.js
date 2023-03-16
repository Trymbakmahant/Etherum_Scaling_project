import logo from "./logo.svg";
import "./App.css";
import Paths from "./components/routs/Paths";
import Sidebar from "./components/sidebar/Sidebar";
import { Flex, Center } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Flex gap={20}>
        <Sidebar />
        <Center>
          <Paths />
        </Center>
      </Flex>
    </div>
  );
}

export default App;
