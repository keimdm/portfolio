import React from 'react';
import { GridItem, Box, Text, Heading } from "@chakra-ui/react"

// renders  code for resume section, including list of skills  and downloadable resume
function Home({ currentPage, handlePageChange }) {
  
  return (
    <GridItem
      colStart={3}
      colEnd={19}
      rowStart={1}
      rowEnd={20}
      display="flex"
      flexDirection="column"
      alignItems="end"
      justifyContent="end"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="baseline"
      >
        <Heading
          fontSize="7xl"
          color="gray.500"
          fontWeight="300"
          zIndex="2"
        >
          Hello, I'm&nbsp;&nbsp;
        </Heading>
        <Heading
            fontSize="9xl"
            color="blue.700"
            fontWeight="700"
            zIndex="2"
          >
            David.
        </Heading>
      </Box>
      <Text
        color="gray.500"
        pb={3}
        mb={6}
        fontSize="2xl"
        zIndex="2"
      >
        Full Stack Web Developer, Python, Web Design
      </Text>
    </GridItem>
  );
}

export default Home;