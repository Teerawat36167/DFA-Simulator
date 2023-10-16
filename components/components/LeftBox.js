import {
  Flex,
  Input,
  Button,
  Heading,
  Box,
  Divider,
  Code,
} from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const LeftBox = ({
  // handleTest,
  // data,
  // string,
  // handleReset,
  // handleTextChange,
  handleSimulation,
  // handleSimulate
  setSimulating
}) => {
  return (
    <>
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "30em"]}
        mr={[0, 0, 0, 0, 0, 24]}
        mt={[14, 14, 16, 16, 16, 0]}
      >
        <Flex align="flex-end" justify="space-between">
          <Heading variant="title">DFA Simulator</Heading>
          <Code fontSize={["0.5em", null, "0.6em", null, null, "0.6em"]}>
            CHICKEN DONT'T EAT PORK
          </Code>
        </Flex>

        <Divider mb="6" />

        <Box>
            <Flex align="center">
              <Heading>Input String:</Heading>
            </Flex>
            {/* <textarea
              
            /> */}
            <Input
              maxLength="500"
              fontSize={["0.7em", "0.7em", "0.9em"]}
              my={3}
              placeholder={"e.g. babbabab"}
              // value={string}
              // onChange={handleTextChange}
            />
            <Flex justify="space-between" align="center">
              <Flex>
                <Button
                  onClick={handleSimulation}
                >
                  Simulate
                </Button>
                <Button
                  variant="clear"
                  // onClick={handleReset}
                >
                  Clear
                </Button>
              </Flex>
            </Flex>
        </Box>
      </Box>
    </>
  );
};

export default LeftBox;
