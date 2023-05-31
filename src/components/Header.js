import React from 'react';
import Navigation from './Navigation';
import Links from './Links';
import Controls from './Controls';
import { GridItem, Heading, Box, Show } from "@chakra-ui/react"

// renders code for header, including the navigation element
function Header({ currentPage, handlePageChange, setColorMode, colorMode, colors }) {

  return (
    <GridItem
      colStart={1}
      colEnd={{sm: 2, md: 3}}
      rowStart={1}
      rowEnd={{sm: 1, md: 20}}
      position={{sm: "static", md: "fixed"}}
    >
      <Box
        display="flex"
        flexDirection={{sm: "row", md: "column"}}
        justifyContent={{sm: "center", md: "space-between"}}
        h={{sm: "auto", md: "100vh"}}
        w={{sm: window.innerWidth, md: "auto"}}
      >
        <Box
          w={{sm: "100%", md: "auto"}}
        >
          <Show above='md'>
            <Heading
              as="p"
              display="flex"
              flexDirection="row"
              justifyContent={{sm: "center", md: "start"}}
              fontSize="4xl"
              fontWeight="700"
              color={colorMode === "light" ? colors.accentLight : colors.accentDark}
              pb={6}
              zIndex="2"
            >DK
            </Heading>
          </Show>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} colorMode={colorMode} colors={colors} setColorMode={setColorMode} />
          <Box
            zIndex="2"
            pt={2}
          >
            <Show above='md'>
              <Links colorMode={colorMode} colors={colors} />
            </Show>
        </Box>
        </Box>
        
        <Box
          zIndex="2"  
          pl={3}
        >
          <Show above='md'>
            <Controls colorMode={colorMode} colors={colors} setColorMode={setColorMode} />
          </Show>
        </Box>
      </Box>
    </GridItem>
  );
}

export default Header;
