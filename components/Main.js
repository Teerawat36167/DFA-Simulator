import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import { tokenize } from "./DFA/Tokenize";

const Main = () => {
  const [string, setString] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(-1);
  const [outputString, setOutputString] = useState("");
  const [outputList, setOutputList] = useState([]);

  // {value: , check:}

  const [currentNode, setCurrentNode] = useState();
  const [simulating, setSimulating] = useState(false);

  const closeToasts = useToast();
  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();

  let input = string;
  let results = "";
  useEffect(()=>{
setOutputList(
            outputList.map((e) => {
              console.log(e);
              if (index === e.id) {
                e.check = true;
              }
              return e;
            })
          );
  },[index])
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

  const addOutputStr = (listStr) => {
    let temp = "[ ' ";
    for (let i = 0; i < listStr.length; i++) {
      temp = temp + listStr[i] + " ' ";
      if (i != listStr.length - 1) {
        temp += ", ' ";
      }
    }
    temp = temp + " ]";
    setOutputString(temp);
  };

  const addOutputList = (output) => {
    let i = 0;
    const t = output
      .map((o) => {
        if (o != "(" && o != ")") {
          return { value: o, check: false, id: i++ };
        }
      })
      .filter((e) => e !== undefined);
    setOutputList(t);
    return t;
  };

  const handleSimulation = () => {
    setIndex(-1)
    const output = tokenize(string);
    addOutputList(output[1]);
    addOutputStr(output[1]);
    console.log(output)
    const allPath = output[0];
    let walking = [];
    for (let i = 0; i < allPath.length; i++)
      walking = walking.concat(allPath[i]);
    const pathWithZeroes = [].concat(...walking.map((e) => [e, null]));
    let templist = outputList;
    // console.log(templist);
    
    pathWithZeroes.some((node, i) => {
      setTimeout(() => {
        if (node === "0") {
          setIndex(index+1)
        }
        console.log(node)
        setCurrentNode(node);
      }, i * 500);
    });
  };

  const handleTest = (e) => {
    if (input == "") {
      notInLanguageToast();
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
        // simulating={simulating}
        handleSimulation={handleSimulation}
        handleReset={handleReset}
        setSimulating={setSimulating}
        outputString={outputString}
        outputList={outputList}
      />
      <Divider
        display={["block", null, "block", null, null, "none"]}
        mt="6"
        mb="2"
      />
      {/* butttom */}
      <RightBox simulating={simulating} currentNode={currentNode} />
    </Flex>
  );
};

export default Main;
