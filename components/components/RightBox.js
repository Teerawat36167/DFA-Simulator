import { Flex, Button, Heading, Tag } from "@chakra-ui/react";

import FirstDFA from "../DFA/FirstDFA";
const RightBox = ({
  simulating,
  currentNode,
  input
}) => {

  console.log('current', currentNode)

  return (
    <>
      <Flex
        direction="column"
        mb={[14, 14, 16, 16, 16, 0]}
        w={["20em", null, "40em", null, null, "60em"]}
      >
        <Flex
          h={["12em", null, "18em", null, null, "18em"]}
          pos="relative"
          borderBottom="solid 1px"
          borderColor="gray.200"
        >
          <FirstDFA currentNode={currentNode} simulating={simulating} input={input}/>
        </Flex>
      </Flex>
    </>
  );
};

export default RightBox;
