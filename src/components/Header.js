import React from 'react';
import Navigation from './Navigation';
import Links from './Links';
import { GridItem, Heading, Box } from "@chakra-ui/react"

// renders code for header, including the navigation element
function Header({ currentPage, handlePageChange, setColorMode, colorMode, colors }) {

  const handleToggle = () => {
    setColorMode(colorMode==="light" ? "dark" : "light")
  }

  return (
    <GridItem
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={20}
      position="fixed"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="100vh"
      >
        <Box>
          <Heading
            as="p"
            display="flex"
            flexDirection="row"
            justifyContent="start"
            fontSize="4xl"
            fontWeight="700"
            color={colorMode === "light" ? colors.accentLight : colors.accentDark}
            pb={6}
            zIndex="2"
          >DK
          </Heading>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} colorMode={colorMode} colors={colors} />
        </Box>
        <Box
          zIndex="2"  
          pl={3}
        >
          <Links colorMode={colorMode} colors={colors} />
          <Box
            bgColor="red.500"
            onClick={() => handleToggle()}
          >
            Click to Toggle
          </Box>
        </Box>
      </Box>
    </GridItem>
  );
}

export default Header;
