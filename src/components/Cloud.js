import React, { useState } from 'react';
import { Image, Box } from "@chakra-ui/react"
import cloud from '../assets/cloud-pic-normal.png';
import cloud2 from '../assets/cloud-pic-dark.png';
import CloudBox from './CloudBox';

// renders code for header, including the navigation element
function Cloud({cloudEntry, index, leftValue, currentPage}) {

    const [picture, setPicture] = useState(cloud);
    const [cursor, setCursor] = useState("auto");

    const boxData = [
        {
            left: 0,
            bottom: 0,
            width: 55,
            height: 120,
        },
        {
            left: 55,
            bottom: 0,
            width: 55,
            height: 200,
        },
        {
            left: 110,
            bottom: 0,
            width: 55,
            height: 385,
        },
        {
            left: 165,
            bottom: 0,
            width: 100,
            height: 425,
        },
        {
            left: 265,
            bottom: 0,
            width: 140,
            height: 390,
        },
        {
            left: 405,
            bottom: 0,
            width: 55,
            height: 360,
        },
        {
            left: 460,
            bottom: 0,
            width: 75,
            height: 315,
        },
        {
            left: 535,
            bottom: 0,
            width: 120,
            height: 270,
        },
        {
            left: 655,
            bottom: 0,
            width: 95,
            height: 145,
        },
        {
            left: 750,
            bottom: 0,
            width: 50,
            height: 75,
        },
    ];

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
        <Box
            position="fixed"
            left={leftValue.toString() + "px"}
            top={cloudEntry.top.toString() + "px"}
            w="800px"
            h="425px"
        >
            <Image
                src={picture}
                alt="cloud sprite"
            >
            </Image>
            {
            boxData.map((item, index) => (
                <CloudBox item={item} index={index} handleEnter={handleEnter} handleLeave={handleLeave} handleClick={handleClick} cursor={cursor} />
            ))
            }
        </Box>
    );
}

export default Cloud;