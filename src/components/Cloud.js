import React, { useState } from 'react';
import { Image, Text } from "@chakra-ui/react"
import cloud from '../assets/cloud-pic-normal.png';
import cloud2 from '../assets/cloud-pic-dark.png';

// renders code for header, including the navigation element
function Cloud({cloudEntry, index, leftValue}) {

    const [picture, setPicture] = useState(cloud);
    const [cursor, setCursor] = useState("auto");

    const handleEnter = () => {
        console.log("entered")
        setPicture(cloud2);
        setCursor("pointer");
    };

    const handleLeave = () => {
        console.log("left")
        setPicture(cloud);
        setCursor("auto");
    };

    const handleClick = () => {
        console.log("click")
        window.open(cloudEntry.link, '_blank');
    };

    return (
        <Image
            src={picture}
            alt="cloud sprite"
            position="absolute"
            left={leftValue.toString() + "px"}
            top={cloudEntry.top.toString() + "px"}
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
            onClick={() => handleClick()}
            cursor={cursor}
        >
        </Image>
    );
}

export default Cloud;