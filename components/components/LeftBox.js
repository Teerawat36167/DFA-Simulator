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
import { ImCross, ImOpera } from "react-icons/im";

const LeftBox = ({

  handleTest,
  data,
  string,
  handleReset,
  handleTextChange,
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
          <Heading variant="title">Tokenizer Virtualization</Heading>
          <Code fontSize={["0.5em", null, "0.6em", null, null, "0.6em"]}>
            CHICKEN DONT'T EAT PORK
          </Code>
        </Flex>

        <Divider mb="6" />

        <Box>
          <Flex align="center">
            <Heading>Input String:</Heading>
            <Flex align="center">
              {data && (
                <Button
                  variant="data"
                  rightIcon={
                    data.result == "Valid" ? (
                      <Box color="teal.300">
                        <FaCheck />
                      </Box>
                    ) : (
                      data.result == "Invalid" && (
                        <Box color="pink.300">
                          <ImCross />
                        </Box>
                      )
                    )
                  }
                >
                  {data.result}
                </Button>
              )}
            </Flex>
          </Flex>
          <textarea
            style={{
              fontSize: ["0.7em", "0.7em", "0.9em"],
              margin: "1rem 0",
              width: "100%",
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#000",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px"
            }}
            placeholder={"# Your Python code here\n\tdef hello_world():\n\t\tprint(\"Hello, World!\")\n\tfor i in range(5):\n\t\tprint(i)"}
            value={string}
            onChange={handleTextChange}
            rows={4}
            cols={50}
          />
          {/* <Input
            maxLength="500"
            fontSize={["0.7em", "0.7em", "0.9em"]}
            my={3}
            placeholder={"e.g. babbabab"}
            value={string}
            onChange={handleTextChange}
          /> */}
          <Flex justify="space-between" align="center">
            <Flex>
              <Button
                onClick={handleSimulation}
              // onClick={handleTest}
              >
                Simulate
              </Button>
              <Button
                variant="clear"
                onClick={handleReset}
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
