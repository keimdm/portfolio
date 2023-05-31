import React from 'react';
import { GridItem, Box, Text, Heading } from "@chakra-ui/react"

// renders  code for resume section, including list of skills  and downloadable resume
function Home({ currentPage, handlePageChange, colorMode, colors }) {
  
  return (
    <GridItem
      colStart={{base: 1, md: 3}}
      colEnd={{base: 21, md: 19}}
      rowStart={1}
      rowEnd={20}
      display="flex"
      flexDirection="column"
      alignItems={{base: "center", md: "end"}}
      justifyContent="end"
      pl={{base: 0, md: 24}}
    >
      <Box
        display="flex"
        flexDirection={{base: "column", md: "row"}}
        justifyContent="center"
        alignItems="baseline"
      >
        <Heading
          fontSize={{base: "5xl", md: "7xl"}}
          color={colorMode === "light" ? colors.standardLight : colors.standardDark}
          fontWeight="300"
          zIndex="2"
        >
          Hello, I'm&nbsp;&nbsp;
        </Heading>
        <Heading
            fontSize={{base: "8xl", md: "9xl"}}
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
        fontSize={{base: "xl", md: "2xl"}}
        zIndex="2"
      >
        Full Stack Web Developer, Python, Web Design
      </Text>
    </GridItem>
  );
}

export default Home;