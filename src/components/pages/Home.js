import React from 'react';
import { GridItem, Box, Text, Heading } from "@chakra-ui/react"

// renders  code for resume section, including list of skills  and downloadable resume
function Home({ currentPage, handlePageChange, colorMode, colors }) {
  
  return (
    <GridItem
      colStart={{base: 1, md: 3}}
      colEnd={{base: 2, md: 19}}
      rowStart={{base: 1, md: 1}}
      rowEnd={{base: 2, md: 20}}
      display="flex"
      flexDirection="column"
      alignItems="end"
      justifyContent="end"
    >
      <Box
        display="flex"
        flexDirection={{base: "column", md: "row"}}
        justifyContent="center"
        alignItems="baseline"
      >
        <Heading
          fontSize={{base: "6xl", md: "7xl"}}
          color={colorMode === "light" ? colors.standardLight : colors.standardDark}
          fontWeight="300"
          zIndex="2"
        >
          Hello, I'm&nbsp;&nbsp;
        </Heading>
        <Heading
            fontSize="9xl"
            color={colorMode === "light" ? colors.accentLight : colors.accentDark}
            fontWeight="700"
            zIndex="2"
          >
            David.
        </Heading>
      </Box>
      <Text
        color={colorMode === "light" ? colors.standardLight : colors.standardDark}
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