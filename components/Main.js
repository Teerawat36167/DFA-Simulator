import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { DFA, problem1,language1} from "./DFA/Logic";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

const Main = () => {

  const [string, setString] = useState("");
  const [data, setData] = useState("");

  const [currentNode, setCurrentNode] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();
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

  const closeAll = () => {
    closeToasts.closeAll();
  };
  const validToast = () => {
    validString({
      title: "Valid String!",
      status: "success",
      isClosable: true,
    });
  };
  const trapToast = () => {
    trapString({
      title: "Invalid: Trapped",
      status: "error",
      isClosable: true,
    });
  };
  const shortToast = () => {
    shortString({
      title: "Invalid: Too Short",
      status: "error",
      isClosable: true,
    });
  };
  const notInLanguageToast = () => {
    notInLanguageString({
      title: "Empty/Invalid Input",
      status: "warning",
      isClosable: true,
    });
  };

  const handleValid = () => {
    // console.log("DONE OK");
    setSimulating(false);
    validToast();
    setData(results);
  };
  const handleTrapped = () => {
    // console.log("DONE TRAPPED");
    setSimulating(false);
    trapToast();
    setData(results);
  };
  const handleShort = () => {
    // console.log("DONE SHORT");
    setSimulating(false);
    shortToast();
    setData(results);
  };

  const handleInputString = () => {
    input = input.replace(/\s+/g, "").toLowerCase();
  };

  const handleTest = (e) => {
    e.preventDefault();
    handleInputString();

    if (input == "") {
      notInLanguageToast();
      // console.log("No valid configuration for input string/empty");
    } else if (input.includes("a") || input.includes("b")) {
      // console.log("PROB1");
      results = new DFA(input, problem1, language1);
      // console.log(results);
      setData(results);
    } else {
      notInLanguageToast();
      // console.log("No valid configuration for input string!!");
    }
  };

  const handleSimulation = (e) => {
    e.preventDefault();
    handleInputString();

    if (input == "") {
      notInLanguageToast();
      // console.log("No valid configuration for input string/empty");
    } else if (input.includes("a") || input.includes("b")) {
      setSimulating(true);
      // console.log("PROB1");
      results = new DFA(input, problem1, language1);
      // console.log(results);
      const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
      // console.log(pathWithZeroes);
      pathWithZeroes.some((node, i) => {
        setTimeout(() => {
          setCurrentNode(node);
          node == pathWithZeroes[pathWithZeroes.length - 2] &&
          !pathWithZeroes.includes("T") &&
          !pathWithZeroes.includes("eos")
            ? handleValid()
            : node == "T" && pathWithZeroes.slice(-4)[0] == "T"
            ? handleTrapped()
            : pathWithZeroes.slice(-4)[3 - 1] == node &&
              !pathWithZeroes.includes("T") &&
              handleShort();
        }, i * 200);
      });
    } else {
      notInLanguageToast();
      // console.log("No valid configuration for input string!!");
    }
  };

  return (
    <Flex
      direction={["column", "column", "column", "column", "column", "row"]}
      align="center"
    >
      {/* top */}
      <LeftBox
        handleTest={handleTest}
        data={data}
        string={string}
        handleTextChange={handleTextChange}
        simulating={simulating}
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
