import React from 'react';
import Navigation from './Navigation';
import { Box } from "@chakra-ui/react"

// renders code for header, including the navigation element
function Header({ currentPage, handlePageChange }) {
  return (
    <Box
      w={{base: "100%", lg: "15%"}}
    >
      <Box 
        as="p"
        display="flex"
        flexDirection="row"
        justifyContent="start"
        fontSize="3xl"
        fontWeight="bold"
        fontFamily="serif"
        color="blue.700"
        mb={6}
      >DK
      </Box>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </Box>
  );
}

export default Header;
