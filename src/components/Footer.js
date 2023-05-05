import React from 'react';
import { GridItem, Box } from "@chakra-ui/react"

// renders code for footer
function Footer() {
  return (
    <GridItem
      colStart={3}
      colEnd={19}
      rowStart={20}
      rowEnd={21}
      display='flex'
      flexDirection='row'
      justifyContent='center'
    >
      <Box 
        as="p"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        color="gray.500"
      >Made by David Keim, 2023
      </Box>
    </GridItem>
    
  );
}

export default Footer;
