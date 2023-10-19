import { Flex, useToast, Divider, Link } from "@chakra-ui/react";
import { react, useEffect, useState } from "react";

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

  const [currentNode, setCurrentNode] = useState();
  const [simulating, setSimulating] = useState(false);
  const closeToasts = useToast();
  const notInLanguageString = useToast();
  const router = useRouter();
  let input = string;

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
  
  const notInLanguageToast = () => {
    notInLanguageString({
      title: "Empty/Invalid Input",
      status: "warning",
      isClosable: true,
    });
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
      if (listStr[i] == '\t') {
        temp += "\\t"
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
        if (o == "\t") {
          return {value: "\\t", check: false, id: i++ }
        } if (o != "(" && o != ")") {
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
    console.log(0,output[1]);
    addOutputList(output[1]);
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

  return (
    <Flex direction="column" align="center">
      <Flex
        direction={["column", "column", "column", "column", "column", "row"]}
        align="center"
      >
        {/* top */}
        <LeftBox
          handleTest={handleTest}
          data={data}
          string={string}
          setString={setString}
          handleTextChange={handleTextChange}
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
      {/* footer */}
      <div style={{marginBottom:"20px", marginTop:"20px"}}>
        <Link href="https://github.com/Teerawat36167/Python-Tokenizer-Visualization" target="_blank">Source Code(github)</Link>
      </div>
    </Flex>
  );
};

export default Main;
