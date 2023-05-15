import React from 'react';
import { Box } from "@chakra-ui/react"

// reeturns code  to be renedered for navigation section, creating links that refer to handlePageChange method to change  the page being  vieweed
function Navigation({ currentPage, handlePageChange, colorMode, colors }) {
    return (
        <Box
            display="flex"
            flexDirection={{base: "row", lg: "column"}}
            justifyContent="space-between"
        >
            <Box
                as="a"
                href="#home"
                onClick={() => handlePageChange('home')}
                color={currentPage === 'home' ? (colorMode === "light" ? colors.accentLight : colors.accentDark) : (colorMode === "light" ? colors.standardLight : colors.standardDark)}
                fontWeight={currentPage === 'home' ? 'bold' : 'normal'}
                pb={3}
                fontSize="2xl"
                zIndex="2"
                _hover={{
                    color: colorMode === "light" ? colors.accentLight : colors.accentDark
                }}
            >Home
            </Box>
            <Box
                as="a"
                href="#about-me"
                onClick={() => handlePageChange('about-me')}
                color={currentPage === 'about-me' ? (colorMode === "light" ? colors.accentLight : colors.accentDark) : (colorMode === "light" ? colors.standardLight : colors.standardDark)}
                fontWeight={currentPage === 'about-me' ? 'bold' : 'normal'}
                pb={3}
                fontSize="2xl"
                zIndex="2"
                _hover={{
                    color: colorMode === "light" ? colors.accentLight : colors.accentDark
                }}
            >About Me
            </Box>
            <Box
                as="a"
                href="#portfolio"
                onClick={() => handlePageChange('portfolio')}
                color={currentPage === 'portfolio' ? (colorMode === "light" ? colors.accentLight : colors.accentDark) : (colorMode === "light" ? colors.standardLight : colors.standardDark)}
                fontWeight={currentPage === 'portfolio' ? 'bold' : 'normal'}
                pb={3}
                fontSize="2xl"
                zIndex="2"
                _hover={{
                    color: colorMode === "light" ? colors.accentLight : colors.accentDark
                }}
            >Portfolio
            </Box>
        </Box>
    );
}

export default Navigation;