import React, { useState } from 'react';
import { Box } from "@chakra-ui/react"
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IconContext } from "react-icons";

function Links() {

    const [ghColor, setGhColor] = useState("#718096");
    const [liColor, setLiColor] = useState("#718096");

    const handleGhEnter = () => {
        setGhColor("#2C5282");
    };

    const handleGhLeave = () => {
        setGhColor("#718096");
    };

    const handleLiEnter = () => {
        setLiColor("#2C5282");
    };

    const handleLiLeave = () => {
        setLiColor("#718096");
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            alignSelf="end"
        >
            <IconContext.Provider value={{ color: ghColor, size: "2em" }}>
                <Box
                    pb={3}
                    onMouseEnter={() => handleGhEnter()}
                    onMouseLeave={() => handleGhLeave()}
                    onClick={() => window.open("https://github.com/keimdm", '_blank')}
                    _hover={{
                        cursor: "pointer"
                    }}
                >
                    <SiGithub />
                </Box>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: liColor, size: "2em" }}>
                <Box
                    onMouseEnter={() => handleLiEnter()}
                    onMouseLeave={() => handleLiLeave()}
                    onClick={() => window.open("https://www.linkedin.com/in/keimdavid/", '_blank')}
                    _hover={{
                        cursor: "pointer"
                    }}
                >
                    <SiLinkedin />
                </Box>
            </IconContext.Provider>
        </Box>
    );
}

export default Links;
