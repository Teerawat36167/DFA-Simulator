import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import { tokenize } from "./DFA/Tokenize";
import { useRouter } from "next/dist/client/router";
const Main = () => {
  const [string, setString] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  let num = 0
  const [index, setIndex] = useState(0);
  const [outputString, setOutputString] = useState("");
  const [outputList, setOutputList] = useState([]);
  const [visibleButton, setVisibleButton] = useState(true)

  // {value: , check:}

  const [currentNode, setCurrentNode] = useState();
  const [simulating, setSimulating] = useState(false);
  let i =1
  const closeToasts = useToast();
  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();
  const router = useRouter();
  let input = string;
  let results = "";
  useEffect(()=>{
    setOutputList(
            outputList.map((e) => {
              if ((index-1) === e.id) {
                if(index != 0){

                  e.check = true;
                }
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
    router.reload();
    setString("");
    setData("");
    closeAll();
  };

  const addOutputStr = (listStr) => {
    let temp = "[ ' ";
    for (let i = 0; i < listStr.length; i++) {
      if (listStr[i] == '\n') {
        temp += "\\n"
      }
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
        if (o == "\n") {
          return {value: "\\n", check: false, id: i++ }
        }
        if (o != "(" && o != ")") {
          return { value: o, check: false, id: i++ };
        }
      })
      .filter((e) => e !== undefined);
    setOutputList(t);
    return t;
  };

  const handleSimulation = () => {
    setIndex(num)
    setVisibleButton(false)
    const output = tokenize(string);
    console.log(output[1]);
    addOutputList(output[1]);
    console.log(3,outputList);
    addOutputStr(output[1]);
    const allPath = output[0];
    let walking = [];
    for (let i = 0; i < allPath.length; i++)
      walking = walking.concat(allPath[i]);
    const pathWithZeroes = [].concat(...walking.map((e) => [e, null]));

    pathWithZeroes.some((node, i) => {
      setTimeout(() => {
        if ((node === "0") && (i != 0) ) {
          num = num+1
          setIndex(num)
        }
        if(pathWithZeroes.length == (i+1)){
          setIndex(num+1)
          console.log("finish")
          setVisibleButton(true)
        }
        setCurrentNode(node);
      }, i * 500);
    });
  };

  const handleTest = (e) => {
    if (input == "") {
      notInLanguageToast();
    }
  };

  console.log(visibleButton);

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
        visibleButton={visibleButton}
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
