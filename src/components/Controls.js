import React, { useState } from 'react';
import { Box } from "@chakra-ui/react"
import { VscColorMode, VscUnmute, VscMute } from "react-icons/vsc";
import { IconContext } from "react-icons";

function Controls({colorMode, colors, setColorMode}) {

    const [mode, setMode] = useState(false);
    const [music, setMusic] = useState(false);
    const [playing, setPlaying] = useState(false);

    const handleToggle = () => {
        setColorMode(colorMode==="light" ? "dark" : "light")
        if (window.localStorage.getItem("dkPortfolioColorMode") === "light") {
            window.localStorage.setItem("dkPortfolioColorMode", "dark");
        }
        else {
            window.localStorage.setItem("dkPortfolioColorMode", "light");
        }
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
        >
            <IconContext.Provider value={{ color: colorMode === "light" ? (mode === true ? colors.linkActiveLight : colors.linkStandardLight) : (mode === true ? colors.linkActiveDark : colors.linkStandardDark), size: "2em" }}>
                <Box
                    pb={3}
                    onClick={() => handleToggle()}
                    onMouseEnter={() => setMode(true)}
                    onMouseLeave={() => setMode(false)}
                    _hover={{
                        cursor: "pointer",
                    }}
                >
                    <VscColorMode />
                </Box>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: colorMode === "light" ? (music === true ? colors.linkActiveLight : colors.linkStandardLight) : (music === true ? colors.linkActiveDark : colors.linkStandardDark), size: "2em" }}>
                <Box
                    onClick={() => setPlaying(false)}
                    onMouseEnter={() => setMusic(true)}
                    onMouseLeave={() => setMusic(false)}
                    display={playing === true ? "block" : "none"}
                    _hover={{
                        cursor: "pointer",
                    }}
                    mb={20}
                >
                    <VscUnmute />
                </Box>
                <Box
                    onClick={() => setPlaying(true)}
                    onMouseEnter={() => setMusic(true)}
                    onMouseLeave={() => setMusic(false)}
                    display={playing === true ? "none" : "block"}
                    _hover={{
                        cursor: "pointer",
                    }}
                    mb={20}
                >
                    <VscMute />
                </Box>
            </IconContext.Provider>
        </Box>
    );
}

export default Controls;
