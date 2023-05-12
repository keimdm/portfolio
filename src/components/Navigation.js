import React from 'react';
import { Box } from "@chakra-ui/react"

// reeturns code  to be renedered for navigation section, creating links that refer to handlePageChange method to change  the page being  vieweed
function Navigation({ currentPage, handlePageChange }) {
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
                color={currentPage === 'home' ? 'blue.700' : 'gray.500'}
                fontWeight={currentPage === 'home' ? 'bold' : 'normal'}
                pb={3}
                fontSize="2xl"
                zIndex="2"
                _hover={{
                    color: "blue.700"
                }}
            >Home
            </Box>
            <Box
                as="a"
                href="#about-me"
                onClick={() => handlePageChange('about-me')}
                color={currentPage === 'about-me' ? 'blue.700' : 'gray.500'}
                fontWeight={currentPage === 'about-me' ? 'bold' : 'normal'}
                pb={3}
                fontSize="2xl"
                zIndex="2"
                _hover={{
                    color: "blue.700"
                }}
            >About Me
            </Box>
            <Box
                as="a"
                href="#portfolio"
                onClick={() => handlePageChange('portfolio')}
                color={currentPage === 'portfolio' ? 'blue.700' : 'gray.500'}
                fontWeight={currentPage === 'portfolio' ? 'bold' : 'normal'}
                pb={3}
                fontSize="2xl"
                zIndex="2"
                _hover={{
                    color: "blue.700"
                }}
            >Portfolio
            </Box>
            {/*<Box
                as="a"
                href="#contact"
                onClick={() => handlePageChange('contact')}
                color={currentPage === 'contact' ? 'blue.700' : 'gray.500'}
                fontWeight={currentPage === 'contact' ? 'bold' : 'normal'}
                fontSize="2xl"
                zIndex="2"
                pb={3}
                _hover={{
                    color: "blue.700"
                }}
            >Contact
            </Box>*/}
        </Box>
    );
}

export default Navigation;