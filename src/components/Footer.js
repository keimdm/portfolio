import React from 'react';
import { Text } from "@chakra-ui/react"

// renders code for footer
function Footer() {
  return (
    <Text 
        as="p"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        color="gray.500"
        h="5vh"
      >Made by David Keim, 2023
      </Text>
  );
}

export default Footer;
