import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { DFA, problem1, language1 } from "./DFA/Logic";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

const Main = () => {

  const [string, setString] = useState("");
  const [data, setData] = useState("");

  const [currentNode, setCurrentNode] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const closeToasts = useToast();

  let input = string;
  let results = "";

  const handleTextChange = (e) => {
    const stringValue = e.target.value;
    setString(stringValue);
  };
  const handleReset = () => {
    setString("");
    setData("");
    closeAll();
  };
  const handleSimulation = () => {

  }

  return (
    <Flex
      direction={["column", "column", "column", "column", "column", "row"]}
      align="center"
    >
      {/* top */}
      <LeftBox
        // handleTest={handleTest}
        data={data}
        string={string}
        handleTextChange={handleTextChange}
        // simulating={simulating}
        handleSimulation={handleSimulation}
        handleReset={handleReset}
      />
      <Divider
        display={["block", null, "block", null, null, "none"]}
        mt="6"
        mb="2"
      />
      {/* butttom */}
      <RightBox
        simulating={simulating}
        currentNode={currentNode}
      />
    </Flex>
  );
};

export default Main;
