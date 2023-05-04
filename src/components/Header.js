import React from 'react';
import Navigation from './Navigation';
import { Box } from "@chakra-ui/react"

// renders code for header, including the navigation element
function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <h1>David Keim</h1>
      </Box>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
