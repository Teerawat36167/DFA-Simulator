import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { DFA, problem1,language1} from "./DFA/Logic";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

const Main = () => {

  // const [string, setString] = useState("");
  // const [data, setData] = useState([]);

  // const [currentNode, setCurrentNode] = useState(0);
  const [simulating, setSimulating] = useState(false);

  // const handleTextChange = (e) => {
  //   const stringValue = e.target.value;
  //   setString(stringValue);
  // };
  // const handleReset = () => {
  //   setString("");
  //   setData("");
  //   closeAll();
  // };
  // const handleSimulation = () => {

  // }

  const input = [1,2,3]

  return (
    <Flex
      direction={["column", "column", "column", "column", "column", "row"]}
      align="center"
    >
      {/* top */}
      <LeftBox
        setSimulating={setSimulating}
        // handleSimulate={handleSimulate}
        // handleTest={handleTest}
        // data={data}
        // string={string}
        // handleTextChange={handleTextChange}
        // simulating={simulating}
        // handleSimulation={handleSimulation}
        // handleReset={handleReset}
      />
      <Divider
        display={["block", null, "block", null, null, "none"]}
        mt="6"
        mb="2"
      />
      {/* bottom */}
      <RightBox
        simulating={simulating}
        input={input}
      />
    </Flex>
  );
};

export default Main;
