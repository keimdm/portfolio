import React from 'react';
import Navigation from './Navigation';
import { GridItem } from "@chakra-ui/react"

// renders code for header, including the navigation element
function MobileHeader({ currentPage, handlePageChange, setColorMode, colorMode, colors }) {

  return (
    <GridItem
      colStart={1}
      colEnd={21}
      rowStart={1}
      maxH="50px"
      position="static"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} colorMode={colorMode} colors={colors} setColorMode={setColorMode} />
    </GridItem>
  );
}

export default MobileHeader;
