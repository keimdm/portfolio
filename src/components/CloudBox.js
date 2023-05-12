import React from 'react';
import { Box } from "@chakra-ui/react"

function CloudBox({item, index, handleEnter, handleLeave, handleClick, cursor}) {

    return (
        <Box
            position="absolute"
            left={item.left.toString() + "px"}
            bottom={item.bottom.toString() + "px"}
            w={item.width.toString() + "px"}
            h={item.height.toString() + "px"}
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
            onClick={() => handleClick()}
            cursor={cursor}
        >
        </Box>
    );
}

export default CloudBox;