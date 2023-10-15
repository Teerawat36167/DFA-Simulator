import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
} from "../components/Arrows";

const Atom = motion(Badge);

const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* LETTERS */}
      {/* q2 q3 */}
      {/* <Text size="label" top="15%" left="30%">
        b
      </Text> */}
      {/* q1 q2 */}
      {/* <Text top="31%" left="14%" size="label">
        a
      </Text> */}
      {/* q2 t */}
      {/* <Text top="31%" left="26%" size="label">
        a
      </Text> */}
      {/* q4 t */}
      {/* <Text top="69%" left="26%" size="label">
        b
      </Text> */}
      {/* q5 t */}
      {/* <Text top="69%" left="34%" size="label">
        a
      </Text> */}
      {/* q3 t */}
      {/* <Text top="31%" left="34%" size="label">
        b
      </Text> */}
      {/* q1 q4 */}
      {/* <Text top="69%" left="14%" size="label">
        b
      </Text> */}
      {/* q4 q5 */}
      {/* <Text top="83%" left="30%" size="label">
        a
      </Text> */}
      {/* q5 q6 */}
      {/* <Text top="69%" left="46%" size="label">
        b
      </Text> */}
      {/* q8 q6 */}
      {/* <Text top="69%" left="54%" size="label">
        a
      </Text> */}
      {/* q8 q9 */}
      {/* <Text top="69%" left="66%" size="label">
        b
      </Text> */}
      {/* q3 q6 */}
      {/* <Text top="31%" left="46%" size="label">
        a
      </Text> */}
      {/* q6 q7 */}
      {/* <Text top="31%" left="54%" size="label">
        b
      </Text> */}
      {/* q6 q6 */}
      {/* <Text
        top={["45%", "45%", "50%", "50%", "50%", "50%"]}
        left={["40%", "40%", "42%", null, null, "43%"]}
        size="label"
      >
        a
      </Text> */}
      {/* q9 q10 */}
      {/* <Text top="45%" left="80%" size="label">
        a,b
      </Text> */}
      {/* q7 q7 */}
      {/* <Text
        top="19.5%"
        left={["71%", "71%", "68%", null, null, "67%"]}
        size="label"
      >
        b
      </Text> */}
      {/* q7 q8 */}
      {/* <Text
        top="50%"
        left={["58.5%", "58.5%", "59%", null, null, "59%"]}
        size="label"
      >
        a
      </Text> */}
      {/* ARROW BODY */}
      {/* 0 1*/}
      <ArrowBody
        w="4em"
        top="65%"
        left="3%"
        rotate="50"
      />
      {/* 1 2 */}
      <ArrowBody
        w="4em"
        top="80%"
        left="17%"
      />
      {/* 2 3 */}
      <ArrowBody
        w="4em"
        top="80%"
        left="32%"
      />
      {/* 3 4 */}
      <ArrowBody
        w="4em"
        top="80%"
        left="47%"
      />
      {/* 0 5 */}
      <ArrowBody
        w="6em"
        top="74%"
        left="-1.5%"
        rotate="90"
      />
      <ArrowBody
        w="19.5em"
        top="96%"
        left="25%"
      />
      {/* 1 5 */}
      <ArrowBody
        w="3em"
        top="82.5%"
        left="8%"
        rotate="90"
      />
      {/* 2 5 */}
      <ArrowBody
        w="3em"
        top="82.5%"
        left="23%"
        rotate="90"
      />
      {/* 3 5 */}
      <ArrowBody
        w="3em"
        top="82.5%"
        left="37.5%"
        rotate="90"
      />
      {/* 0 7 */}
      <ArrowBody
        w="10em"
        top="55%"
        left="15%"
      />
      {/* 1 7 */}
      <ArrowBody
        w="4em"
        top="61%"
        left="8%"
        rotate="90"
      />
      {/* 2 7 */}
      <ArrowBody
        w="4.7em"
        top="63%"
        left="18%"
        rotate="45"
      />
      {/* 3 7 */}
      <ArrowBody
        w="8.5em"
        top="65%"
        left="28%"
        rotate="27"
      />
      {/* 7 8 */}
      <ArrowBody
        w="4em"
        top="55%"
        left="37%"
      />
      {/* 7 5 */}
      <ArrowBody
        w="7em"
        top="71%"
        left="28%"
        rotate="90"
      />
      {/* 8 16 */}
      <ArrowBody
        w="8em"
        top="55%"
        left="58%"
      />
      {/* 16 17 */}
      <ArrowBody
        w="8em"
        top="69%"
        left="80%"
        rotate="30"
      />
      {/* 16 18 */}
      <ArrowBody
        w="3.5em"
        top="53%"
        left="77%"
        rotate="-10"
      />
      {/* 5 6 */}
      <ArrowBody
        w="5.2em"
        top="93%"
        left="61%"
        rotate="-10"
      />
      {/* 4 18 */}
      <ArrowBody
        w="10.8em"
        top="68%"
        left="71%"
        rotate="-24"
      />
      {/* 0 17 */}
      <ArrowBody
        w="8em"
        top="75%"
        left="-3%"
        rotate="90"
      />
      <ArrowBody
        w="4em"
        top="87%"
        left="85%"
        rotate="90"
      />
      <ArrowBody
        w="35.2em"
        top="103%"
        left="43.4%"
      />
      {/* 5 17 */}
      <ArrowBody
        w="4em"
        top="100%"
        left="57%"
        rotate="12"
      />
      {/* 6 17 */}
      <ArrowBody
        w="1.7em"
        top="95%"
        left="69%"
        rotate="75"
      />
      {/* 6 18 */}
      <ArrowBody
        w="7em"
        top="70%"
        left="79%"
        rotate="-50"
      />

      {/* ARROWS */}
      {/* q6 q6 */}
      {/* <ArrowLoopSm
        top={["50%", "50%", "50%", null, null, "50%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "46%"]}
        rotate="360"
      />
      <ArrowLoopLg
        top={["50%", "50%", "50%", null, null, "51%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "45.7%"]}
        rotate="20"
      /> */}
      {/* q7 q7 */}
      {/* <ArrowLoopSm
        top={["20%", "20%", "20%", null, null, "20%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "64%"]}
        rotate="180"
      />
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "18.5%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "64.3%"]}
        rotate="200"
      /> */}
      {/* q2 q3 */}
      {/* <ArrowHead
        top={["19.6%", "19.6%", "20%", "20%", "20%", "20%"]}
        left={["34.3%", "34.3%", "35.3%", "35.3%", "35.3%", "36.6%"]}
      /> */}
      {/* q4 q5 */}
      {/* <ArrowHead
        top={["79.3%", "79.3%", "79.9%", "79.9%", "79.9%", "79.9%"]}
        left={["34.3%", "34.3%", "35.3%", "35.3%", "35.3%", "36.6%"]}
      /> */}
      {/* q1 q2 */}
      {/* <ArrowHead
        top={["29%", "29%", "29.2%", "29.2%", "29.2%", "27.7%"]}
        left={["17.2%", "17.2%", "17.6%", "17.6%", "17.6%", "17.3%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-48"]}
      /> */}
      {/* q1 q4 */}
      {/* <ArrowHead
        top={["71%", "71%", "71.7%", "71.7%", "71.7%", "73.5%"]}
        left={["17.4%", "17.4%", "17.3%", "17.3%", "17.3%", "17.1%"]}
        rotate={["47", "47", "40", "40", "40", "40"]}
      /> */}
      {/* q2 t */}
      {/* <ArrowHead
        top={["41.6%", "41.6%", "41.7%", "41.7%", "41.7%", "42.6%"]}
        left={["27.3%", "27.3%", "27.1%", "27.1%", "27.1%", "27.3%"]}
        rotate={["47", "47", "40", "40", "40", "40"]}
      /> */}
      {/* q4 t */}
      {/* <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "58.5%"]}
        left={["27.4%", "27.4%", "27.3%", "27.3%", "27.3%", "27.5%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "-48"]}
      /> */}
      {/* q5 t */}
      {/* <ArrowHead
        top={["58.4%", "58.4%", "58.2%", "58.2%", "58.2%", "58.2%"]}
        left={["33.1%", "33.1%", "33.3%", "33.3%", "33.3%", "32.5%"]}
        rotate={["235", "235", "230", "230", "230", "230"]}
      /> */}
      {/* q3 t */}
      {/* <ArrowHead
        top={["42%", "42%", "42%", "42%", "42%", "42%"]}
        left={["33.2%", "33.2%", "33.2%", "33.2%", "33.2%", "32.5%"]}
        rotate={["130", "130", "130", "130", "130", "130"]}
      /> */}
      {/* q3 q6 */}
      {/* <ArrowHead
        top={["41.8%", "41.8%", "41.7%", "41.7%", "41.7%", "42.8%"]}
        left={["46.6%", "46.6%", "47.1%", "47.1%", "47.1%", "47.3%"]}
        rotate={["50", "50", "40", "40", "40", "40"]}
      /> */}
      {/* q5 q6 */}
      {/* <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "58.5%"]}
        left={["47.2%", "47.2%", "47.4%", "47.4%", "47.4%", "47.5%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "-48"]}
      /> */}
      {/* q6 q7 */}
      {/* <ArrowHead
        top={["29.6%", "29.6%", "29.2%", "29.2%", "29.2%", "27%"]}
        left={["57.8%", "57.8%", "57.9%", null, null, "57.3%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "-48"]}
      /> */}
      {/* q7 q8 */}
      {/* <ArrowHead
        top={["70%", "70%", "69.6%", null, null, "68.7%"]}
        left={["60.2%", "60.2%", "60.3%", null, null, "60.1%"]}
        rotate="90"
      /> */}
      {/* q8 q6 */}
      {/* <ArrowHead
        top={["59.3%", "59.3%", "58.3%", null, null, "58.3%"]}
        left={["52.8%", "52.8%", "53.3%", null, null, "52.5%"]}
        rotate={["240", "240", "230", "230", "230", "230"]}
      /> */}
      {/* q8 q9 */}
      {/* <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "58.3%"]}
        left={["67.6%", "67.6%", "67.4%", null, null, "67.4%"]}
        rotate={["-64", "-64", "-50", "-50", "-50", "-48"]}
      /> */}
      {/* q9 q10 */}
      {/* <ArrowHead
        top={["50%", "50%", "49.7%", null, null, "49.7%"]}
        left={["84%", "84%", "85.2%", null, null, "86.6%"]}
      /> */}
      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        0
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        1
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        2
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        3
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        4
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        5
      </Atom>
      <Atom
        variant="q7"
        variants={variants}
        initial="initial"
        animate={currentNode == 7 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        6
      </Atom>
      <Atom
        variant="q8"
        variants={variants}
        initial="initial"
        animate={currentNode == 8 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        7
      </Atom>
      <Atom
        variant="q9"
        variants={variants}
        initial="initial"
        animate={currentNode == 9 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        8
      </Atom>
      <Atom
        variant="q10"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        9
      </Atom>
      <Atom
        variant="q11"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        10
      </Atom>
      <Atom
        variant="q12"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        11
      </Atom>
      <Atom
        variant="q13"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        12
      </Atom>
      <Atom
        variant="q14"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        13
      </Atom>
      <Atom
        variant="q15"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        14
      </Atom>
      <Atom
        variant="q16"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        15
      </Atom>
      <Atom
        variant="q17"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        16
      </Atom>
      <Atom
        variant="q18"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        17
      </Atom>
      <Atom
        variant="q19"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        18
      </Atom>
      <Atom
        variant="T"
        variants={variants}
        initial="initial"
        animate={currentNode == "T" ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        -1
      </Atom>
    </>
  );
};

export default FirstDFA;
