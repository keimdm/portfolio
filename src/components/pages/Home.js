import React from 'react';
import { Box, Text } from "@chakra-ui/react"

// renders  code for resume section, including list of skills  and downloadable resume
function Home() {
  return (
    <Box
      display="block"
      h="95vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="absolute"
        top="25%"
        left="29%"
      >
        <Box
          w="100%"
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
        >
          Download Resume
        </Text>
      </Box>
    </Box>
  );
}

export default Home;