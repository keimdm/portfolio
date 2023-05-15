import React, { useState } from 'react';
import { Box } from "@chakra-ui/react"
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IconContext } from "react-icons";

function Links({colorMode, colors}) {

    const [ghHover, setGhHover] = useState(false);
    const [liHover, setLiHover] = useState(false);

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="start"
            alignSelf="end"
        >
            <IconContext.Provider value={{ color: colorMode === "light" ? (ghHover === true ? colors.linkActiveLight : colors.linkStandardLight) : (ghHover === true ? colors.linkActiveDark : colors.linkStandardDark), size: "2em" }}>
                <Box
                    pb={3}
                    onClick={() => window.open("https://github.com/keimdm", '_blank')}
                    onMouseEnter={() => setGhHover(true)}
                    onMouseLeave={() => setGhHover(false)}
                    _hover={{
                        cursor: "pointer",
                    }}
                >
                    <SiGithub />
                </Box>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: colorMode === "light" ? (liHover === true ? colors.linkActiveLight : colors.linkStandardLight) : (liHover === true ? colors.linkActiveDark : colors.linkStandardDark), size: "2em" }}>
                <Box
                    onClick={() => window.open("https://www.linkedin.com/in/keimdavid/", '_blank')}
                    onMouseEnter={() => setLiHover(true)}
                    onMouseLeave={() => setLiHover(false)}
                    _hover={{
                        cursor: "pointer",
                    }}
                    pl={3}
                >
                    <SiLinkedin />
                </Box>
            </IconContext.Provider>
        </Box>
    );
}

export default Links;
