import React from 'react';
import { GridItem, Box } from "@chakra-ui/react"

// renders code for footer
function Footer({colorMode, colors}) {
  return (
    <GridItem
      colStart={3}
      colEnd={19}
      rowStart={20}
      rowEnd={21}
      display='flex'
      flexDirection='row'
      justifyContent='center'
      zIndex="2"
      color={colorMode === "light" ? colors.standardLight : colors.standardDark}
      opacity={0}
      _hover={{
          opacity: 100
      }}
    >
      <Box 
        as="p"
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >Made by David Keim, 2023
      </Box>
    </GridItem>
    
  );
}

export default Footer;
