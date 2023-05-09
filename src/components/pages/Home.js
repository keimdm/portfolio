import React from 'react';
import { GridItem, Box, Text } from "@chakra-ui/react"

// renders  code for resume section, including list of skills  and downloadable resume
function Home() {
  return (
    <GridItem
      colStart={3}
      colEnd={19}
      rowStart={1}
      rowEnd={20}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="baseline"
      >
        <Text
          fontFamily="serif"
          fontSize="5xl"
          color="gray.500"
        >
          Hello, I'm&nbsp;&nbsp;
        </Text>
        <Text
            fontFamily="serif"
            fontSize="9xl"
            color="blue.700"
          >
            David.
        </Text>
      </Box>
      <Text
        color="gray.500"
        mb={3}
      >
        View Projects
      </Text>
      <Text
        color="gray.500"
        mb={3}
        as="a"
        href="https://drive.google.com/file/d/1vI5HW-Z7eMg4IGimtN41F95RE3Zdgmit/view?usp=sharing"
      >
        Download Resume
      </Text>
    </GridItem>
  );
}

export default Home;