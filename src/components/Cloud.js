import React, { useState } from 'react';
import { Image } from "@chakra-ui/react"
import cloud from '../assets/cloud-pic-normal.png';
import cloud2 from '../assets/cloud-pic-dark.png';

// renders code for header, including the navigation element
function Cloud({cloudEntry, index, leftValue, currentPage}) {

    const [picture, setPicture] = useState(cloud);
    const [cursor, setCursor] = useState("auto");

    const handleEnter = () => {
        console.log("entered")
        if (currentPage === "home") {
            setPicture(cloud2);
            setCursor("pointer");
        }
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
            position="fixed"
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