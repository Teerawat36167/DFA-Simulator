import { Flex} from "@chakra-ui/react";

import FirstDFA from "../DFA/FirstDFA";
const RightBox = ({
  simulating,
  currentNode,
}) => {

  return (
    <>
      <Flex
        direction="column"
        w="640px"
      >
        <Flex
          h={["12em", null, "18em", null, null, "18em"]}
          pos="relative"
          borderBottom="solid 1px"
          borderColor="gray.200"
        >
          <FirstDFA currentNode={currentNode} simulating={simulating}/>
        </Flex>

      </Flex>
    </>
  );
};

export default RightBox;
