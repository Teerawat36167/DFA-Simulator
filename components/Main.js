import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { DFA, problem1, language1 } from "./DFA/Tokenize";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import { tokenize } from "./DFA/Tokenize";

const Main = () => {

  const [string, setString] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [outputString,setOutputString] = useState([])

  const [currentNode, setCurrentNode] = useState();
  const [simulating, setSimulating] = useState(false);

  const closeToasts = useToast();
  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();

  let input = string;
  let results = "";

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

  const handleTextChange = (e) => {
    const stringValue = e.target.value;
    setString(stringValue);
    const countValue = e.target.value.length;
    setCount(countValue);
  };
  const handleReset = () => {
    setString("");
    setData("");
    closeAll();
  };

  // const inp = [1,2,3]

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleSimulation = (e) => {
    const output = tokenize(string)
    setOutputString(output[1])
    const allPath = output[0]
    e.preventDefault();
    let walking = []
    for (let i = 0; i < allPath.length; i++) walking = walking.concat(allPath[i])

    const pathWithZeroes = [0].concat(...walking.map((e) => [e, null]));

    pathWithZeroes.some( (node, i) => {
      if (node == 17) {
        setTimeout(() => {
          setCurrentNode(node)
          console.log("node")
        }, i * 500)
      } else {
        setTimeout(() => {
          setCurrentNode(node)
          console.log(node)
        }, i * 500)
      }
    })
  }
  
  const handleTest = (e) => {
    if (input == "") {
      notInLanguageToast();
    }
  }
  
  console.log(outputString)
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
        // simulating={simulating}
        handleSimulation={handleSimulation}
        handleReset={handleReset}
        setSimulating={setSimulating}
        output={outputString}
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
