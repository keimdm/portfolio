import React from 'react';
import { Image } from "@chakra-ui/react"

// renders code for header, including the navigation element
function Cloud({cloudEntry, index, leftValue}) {
  return (
    <Image
        src={cloudEntry.picture}
        alt="cloud sprite"
        position="absolute"
        left={leftValue.toString() + "px"}
        top={cloudEntry.top.toString() + "px"}
    >
    </Image>
  );
}

export default Cloud;