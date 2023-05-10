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
        as="a"
        href="#portfolio"
        fontSize="2xl"
        onClick={() => handlePageChange('portfolio')}
        zIndex="2"
        _hover={{
          color: "blue.700"
        }}
      >
        View Projects
      </Text>
      <Text
        color="gray.500"
        mb={12}
        as="a"
        fontSize="2xl"
        href="https://drive.google.com/file/d/1vI5HW-Z7eMg4IGimtN41F95RE3Zdgmit/view?usp=sharing"
        zIndex="2"
        _hover={{
          color: "blue.700"
        }}
      >
        Download Resume
      </Text>
    </GridItem>
  );
}

export default Home;