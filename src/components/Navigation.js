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
                href="#resume"
                onClick={() => handlePageChange('resume')}
                className={currentPage === 'resume' ? 'bg-primary text-white w-25 text-center' : 'w-25 text-center'}
                mb={3}
            >Resume
            </Box>
            <Box
                as="a"
                href="#about-me"
                onClick={() => handlePageChange('about-me')}
                className={currentPage === 'about-me' ? 'bg-primary text-white w-25  text-center' : 'w-25 text-center'}
                mb={3}
            >About Me
            </Box>
            <Box
                as="a"
                href="#portfolio"
                onClick={() => handlePageChange('portfolio')}
                className={currentPage === 'portfolio' ? 'bg-primary text-white w-25 text-center' : 'w-25 text-center'}
                mb={3}
            >Portfolio
            </Box>
            <Box
                as="a"
                href="#contact"
                onClick={() => handlePageChange('contact')}
                className={currentPage === 'contact' ? 'bg-primary text-white w-25 text-center' : 'w-25 text-center'}
                mb={3}
            >Contact
            </Box>
        </Box>
    );
}

export default Navigation;