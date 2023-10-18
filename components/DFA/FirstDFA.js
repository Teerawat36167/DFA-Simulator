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
  pulse: { scale: 2, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const FirstDFA = ({ simulating, currentNode }) => {

  return (
    <>
      {/* LETTERS */}

      {/* 0 7 */}
      <Text size="label" fontSize="md" top="45%" left="20%">
        f
      </Text>
      {/* 0 1 */}
      <Text top="60%" left="5%" fontSize="xs" size="label">
        space
      </Text>
      {/* 1 2 */}
      <Text top="71%" left="17%" fontSize="xs" size="label">
        space
      </Text>
      {/* 2 3 */}
      <Text top="71%" left="32%" fontSize="xs" size="label">
        space
      </Text>
      {/* 3 4 */}
      <Text top="71%" left="47%" fontSize="xs" size="label">
        space
      </Text>
      {/* 0 5 */}
      <Text top="87%" left="17%" fontSize="xs" size="label">
        any
      </Text>
      {/* 0 17 */}
      <Text top="95%" left="80%" fontSize="xs" size="label">
        split
      </Text>
      {/* 5 */}
      <Text top="80%" left="46.5%" fontSize="xs" size="label">
        any
      </Text>
      {/* 6 */}
      <Text top="74%" left="67%" fontSize="xs" size="label">
        space
      </Text>
      {/* 8 */}
      <Text top="40%" left="50%" fontSize="xs" size="label">
        any
      </Text>
      {/* 9 10 */}
      <Text top="25%" left="42%" fontSize="xs" size="label">
        any
      </Text>
      {/* 10 */}
      <Text top="23%" left="50%" fontSize="xs" size="label">
        any
      </Text>
      {/* 12 */}
      <Text top="1%" left="71%" fontSize="xs" size="label">
        any
      </Text>
      {/* -1 */}
      <Text top="48%" left="103%" fontSize="xs" size="label">
        any
      </Text>
      {/* 16 */}
      <Text top="56%" left="63%" fontSize="xs" size="label">
        space
      </Text>
      {/* 4 18 */}
      <Text top="65%" left="63%" fontSize="xs" size="label">
        any
      </Text>
      {/* 11 17 */}
      <Text top="-3%" left="80%" fontSize="xs" size="label">
        split
      </Text>
      {/* 15 16 */}
      <Text top="25%" left="80%" fontSize="xs" size="label">
        space
      </Text>
      {/* 15 -1 */}
      <Text top="17%" left="95%" fontSize="xs" size="label">
        any
      </Text>
      {/* 11 -1 */}
      <Text top="17%" left="82%" fontSize="xs" size="label">
        any
      </Text>
      {/* 5 6 */}
      <Text top="84%" left="60%" fontSize="xs" size="label">
        space
      </Text>
      {/* 16 -1 */}
      <Text top="17%" left="82%" fontSize="xs" size="label">
        any
      </Text>
      {/* 6 18 */}
      <Text top="70%" left="75%" fontSize="xs" size="label">
        any
      </Text>
      {/* 16 17 */}
      <Text top="64%" left="84%" fontSize="xs" size="label">
        split
      </Text>
      {/* 15 17 */}
      <Text top="30%" left="100.5%" fontSize="xs" size="label">
        split
      </Text>
      {/* 17 -1 */}
      <Text top="69%" left="95%" fontSize="xs" size="label">
        any
      </Text>
      {/* 18 -1 */}
      <Text top="48%" left="90%" fontSize="xs" size="label">
        any
      </Text>
      {/* 16 -1 */}
      <Text top="35%" left="90%" fontSize="xs" size="label">
        any
      </Text>
      {/* 14 -1 */}
      <Text top="29%" left="94%" fontSize="xs" size="label">
        any
      </Text>
      {/* 7 8 */}
      <Text top="48%" left="38%" fontSize="2xl" size="label">
        "
      </Text>
      {/* 0 8 */}
      <Text top="37%" left="36%" fontSize="2xl" size="label">
        "
      </Text>
      {/* 0 9 */}
      <Text top="30%" left="17%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 9 11 */}
      <Text top="12%" left="42%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 10 16 */}
      <Text top="40%" left="62%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 11 12 */}
      <Text top="9%" left="60%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 12 13 */}
      <Text top="9%" left="71%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 13 14 */}
      <Text top="9%" left="82%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 14 15 */}
      <Text top="9%" left="93%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 7 9 */}
      <Text top="33%" left="28%" fontSize="2xl" size="label">
        '
      </Text>
      {/* 8 16 */}
      <Text top="48%" left="58%" fontSize="2xl" size="label">
        "
      </Text>
      {/* 16 18 */}
      <Text top="45%" left="77%" fontSize="2xl" size="label">
        ' "
      </Text>

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
      {/* 0 9 */}
      <ArrowBody
        w="9em"
        top="40%"
        left="15%"
        rotate="-30"
      />
      {/* 0 8 */}
      <ArrowBody
        w="2em"
        top="43%"
        left="-1%"
        rotate="90"
      />
      <ArrowBody
        w="2em"
        top="43%"
        left="41.5%"
        rotate="90"
      />
      <ArrowBody
        w="17em"
        top="43%"
        left="22.5%"
      />
      {/* 9 10 */}
      <ArrowBody
        w="13em"
        top="33%"
        left="40%"
        rotate="14"
      />
      {/* 9 11 */}
      <ArrowBody
        w="13em"
        top="20%"
        left="40%"
        rotate="-10"
      />
      {/* 11 12 */}
      <ArrowBody
        w="2em"
        top="15%"
        left="60.5%"
      />
      {/* 12 13 */}
      <ArrowBody
        w="2em"
        top="15%"
        left="71.5%"
      />
      {/* 13 14 */}
      <ArrowBody
        w="2em"
        top="15%"
        left="82.5%"
      />
      {/* 14 15 */}
      <ArrowBody
        w="2em"
        top="15%"
        left="93.5%"
      />
      {/* 10 16 */}
      <ArrowBody
        w="4.5em"
        top="47%"
        left="62%"
        rotate="20"
      />
      {/* 11 17 */}
      <ArrowBody
        w="2em"
        top="5%"
        left="53%"
        rotate="90"
      />
      <ArrowBody
        w="14em"
        top="39%"
        left="103%"
        rotate="90"
      />
      <ArrowBody
        w="20em"
        top="5%"
        left="80.5%"
      />
      <ArrowBody
        w="7em"
        top="83%"
        left="96.5%"
      />
      {/* 17 -1 */}
      <ArrowBody
        w="4em"
        top="72%"
        left="96.5%"
        rotate="-25"
      />
      {/* 18 -1 */}
      <ArrowBody
        w="6em"
        top="58%"
        left="90%"
        rotate="30"
      />
      {/* 15 16 */}
      <ArrowBody
        w="3em"
        top="15%"
        left="97%"
        rotate="90"
      />
      <ArrowBody
        w="4em"
        top="35%"
        left="68.5%"
        rotate="90"
      />
      <ArrowBody
        w="11.5em"
        top="29%"
        left="85%"
      />
      {/* 11 16 */}
      <ArrowBody
        w="8em"
        top="32%"
        left="61%"
        rotate="53"
      />
      {/* 11 -1 */}
      <ArrowBody
        w="1.5em"
        top="17%"
        left="53%"
        rotate="90"
      />
      <ArrowBody
        w="14em"
        top="26%"
        left="73%"
      />
      {/* 14 -1 */}
      <ArrowBody
        w="10em"
        top="35%"
        left="91%"
        rotate="65"
      />
      {/* 12 -1 */}
      <ArrowBody
        w="1.5em"
        top="17%"
        left="63.5%"
        rotate="90"
      />
      {/* 13 -1 */}
      <ArrowBody
        w="1.5em"
        top="17%"
        left="74.5%"
        rotate="90"
      />
      {/* 15 -1 */}
      <ArrowBody
        w="3.5em"
        top="21%"
        left="95.5%"
        rotate="-20"
      />
      {/* 7 9 */}
      <ArrowBody
        w="5em"
        top="35%"
        left="25%"
        rotate="60"
      />
      {/* 16 -1 */}
      <ArrowBody
        w="5em"
        top="47%"
        left="76%"
        rotate="-40"
      />
      <ArrowBody
        w="5.5em"
        top="39%"
        left="86.2%"
      />
      {/* 15 17 */}
      <ArrowBody
        w="5em"
        top="27%"
        left="96%"
        rotate="90"
      />
      <ArrowBody
        w="7em"
        top="53%"
        left="91.5%"
        rotate="125"
      />

      {/* ARROWS */}
      {/* 8 */}
      <ArrowLoopSm
        top="43.5%"
        left="48%"
        rotate="135"
      />
      {/* 5 */}
      <ArrowLoopSm
        top="83%"
        left="49%"
        rotate="50"
      />
      {/* 12 */}
      <ArrowLoopSm
        top="2%"
        left="68%"
        rotate="117"
      />
      {/* 10 */}
      <ArrowLoopSm
        top="26%"
        left="53%"
        rotate="50"
      />
      {/* 16 */}
      <ArrowLoopSm
        top="56%"
        left="66.5%"
        rotate="-40"
      />
      {/* 6 */}
      <ArrowLoopSm
        top="78%"
        left="67%"
        rotate="50"
      />
      {/* -1 */}
      <ArrowLoopSm
        top="53%"
        left="102%"
        rotate="117"
      />
      
      {/* 0 1 */}
      <ArrowHead
        top="67%"
        left="7%"
        rotate="45"
      />
      {/* 7 9 */}
      <ArrowHead
        top="30%"
        left="26.3%"
        rotate="-125"
      />
      {/* 1 2 */}
      <ArrowHead
        top="74.8%"
        left="20%"
      />
      {/* 2 3 */}
      <ArrowHead
        top="74.8%"
        left="35%"
      />
      {/* 3 4 */}
      <ArrowHead
        top="74.8%"
        left="50%"
      />
      {/* 0 5 */}
      <ArrowHead
        top="90.8%"
        left="45%"
      />
      {/* 1 5 */}
      <ArrowHead
        top="85%"
        left="10.4%"
        rotate="90"
      />
      {/* 2 5 */}
      <ArrowHead
        top="85%"
        left="25.4%"
        rotate="90"
      />
      {/* 3 5 */}
      <ArrowHead
        top="85%"
        left="39.9%"
        rotate="90"
      />
      {/* 5 6 */}
      <ArrowHead
        top="86%"
        left="65%"
        rotate="-10"
      />
      {/* 5 17 */}
      <ArrowHead
        top="96%"
        left="60%"
        rotate="15"
      />
      {/* 6 17 */}
      <ArrowHead
        top="96%"
        left="71.5%"
        rotate="80"
      />
      {/* 0 17 */}
      <ArrowHead
        top="97.8%"
        left="85%"
      />
      {/* 0 7 */}
      <ArrowHead
        top="49.5%"
        left="25%"
      />
      {/* 1 7 */}
      <ArrowHead
        top="54%"
        left="10.4%"
        rotate="-90"
      />
      {/* 2 7 */}
      <ArrowHead
        top="54%"
        left="17.2%"
        rotate="-130"
      />
      {/* 3 7 */}
      <ArrowHead
        top="54%"
        left="23.2%"
        rotate="-150"
      />
      {/* 7 5 */}
      <ArrowHead
        top="85%"
        left="30.4%"
        rotate="90"
      />
      {/* 0 8 */}
      <ArrowHead
        top="38%"
        left="40%"
      />
      {/* 7 8 */}
      <ArrowHead
        top="49.5%"
        left="40%"
      />
      {/* 8 16 */}
      <ArrowHead
        top="49.5%"
        left="65%"
      />
      {/* 10 16 */}
      <ArrowHead
        top="44%"
        left="65%"
        rotate="35"
      />
      {/* 11 16 */}
      <ArrowHead
        top="40%"
        left="66.5%"
        rotate="60"
      />
      {/* 16 18 */}
      <ArrowHead
        top="47%"
        left="80%"
        rotate="-10"
      />
      {/* 4 18 */}
      <ArrowHead
        top="53%"
        left="80%"
        rotate="-30"
      />
      {/* 6 18 */}
      <ArrowHead
        top="58%"
        left="80.5%"
        rotate="-50"
      />
      {/* 16 17 */}
      <ArrowHead
        top="68%"
        left="83.5%"
        rotate="40"
      />
      {/* 18 -1 */}
      <ArrowHead
        top="60%"
        left="96%"
        rotate="40"
      />
      {/* 17 -1 */}
      <ArrowHead
        top="66.5%"
        left="96%"
        rotate="-40"
      />
      {/* 11 17 */}
      <ArrowHead
        top="78%"
        left="96%"
        rotate="-180"
      />
      {/* 14 -1 */}
      <ArrowHead
        top="50%"
        left="96.8%"
        rotate="65"
      />
      {/* 11 -1 */}
      <ArrowHead
        top="20.8%"
        left="86%"
      />
      {/* 15 16 */}
      <ArrowHead
        top="23.8%"
        left="86%"
        rotate="180"
      />
      {/* 16 -1*/}
      <ArrowHead
        top="33.7%"
        left="86%"
      />
      {/* 15 -1*/}
      <ArrowHead
        top="18.5%"
        left="92%"
        rotate="160"
      />
      {/* 12 -1*/}
      <ArrowHead
        top="20%"
        left="65.8%"
        rotate="90"
      />
      {/* 13 -1*/}
      <ArrowHead
        top="20%"
        left="76.8%"
        rotate="90"
      />
      {/* 11 12 */}
      <ArrowHead
        top="10%"
        left="62%"
      />
      {/* 12 13 */}
      <ArrowHead
        top="10%"
        left="73%"
      />
      {/* 13 14 */}
      <ArrowHead
        top="10%"
        left="84%"
      />
      {/* 14 15 */}
      <ArrowHead
        top="10%"
        left="95%"
      />
      {/* 15 17 */}
      <ArrowHead
        top="66%"
        left="90%"
        rotate="130"
      />
      {/* 0 9 */}
      <ArrowHead
        top="25%"
        left="22%"
        rotate="-35"
      />
      {/* 9 11 */}
      <ArrowHead
        top="11%"
        left="50%"
        rotate="-20"
      />
      {/* 9 10 */}
      <ArrowHead
        top="33%"
        left="50%"
        rotate="25"
      />
      
      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 0 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        0
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        1
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        2
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        3
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        4
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        5
      </Atom>
      <Atom
        variant="q7"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        6
      </Atom>
      <Atom
        variant="q8"
        variants={variants}
        initial="initial"
        animate={currentNode == 7 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        7
      </Atom>
      <Atom
        variant="q9"
        variants={variants}
        initial="initial"
        animate={currentNode == 8 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        8
      </Atom>
      <Atom
        variant="q10"
        variants={variants}
        initial="initial"
        animate={currentNode == 9 ? "pulse" : ""}
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
        animate={currentNode == 11 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        11
      </Atom>
      <Atom
        variant="q13"
        variants={variants}
        initial="initial"
        animate={currentNode == 12 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        12
      </Atom>
      <Atom
        variant="q14"
        variants={variants}
        initial="initial"
        animate={currentNode == 13 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        13
      </Atom>
      <Atom
        variant="q15"
        variants={variants}
        initial="initial"
        animate={currentNode == 14 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        14
      </Atom>
      <Atom
        variant="q16"
        variants={variants}
        initial="initial"
        animate={currentNode == 15 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        15
      </Atom>
      <Atom
        variant="q17"
        variants={variants}
        initial="initial"
        animate={currentNode == 16 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        16
      </Atom>
      <Atom
        variant="q18"
        variants={variants}
        initial="initial"
        animate={currentNode == 17 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        17
      </Atom>
      <Atom
        variant="q19"
        variants={variants}
        initial="initial"
        animate={currentNode == 18 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        18
      </Atom>
      <Atom
        variant="T"
        variants={variants}
        initial="initial"
        animate={currentNode == -1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        -1
      </Atom>
    </>
  );
};

export default FirstDFA;
