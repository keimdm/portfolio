import React from 'react';
import Navigation from './Navigation';
import { GridItem, Heading } from "@chakra-ui/react"

// renders code for header, including the navigation element
function Header({ currentPage, handlePageChange }) {
  return (
    <GridItem
      colStart={1}
      colEnd={3}
      rowStart={1}
      rowEnd={20}
    >
      <Heading
        as="p"
        display="flex"
        flexDirection="row"
        justifyContent="start"
        fontSize="3xl"
        fontWeight="700"
        color="blue.700"
        mb={6}
      >DK
      </Heading>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </GridItem>
  );
}

export default Header;
