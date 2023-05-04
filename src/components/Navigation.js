import React from 'react';
import { Box } from "@chakra-ui/react"

// reeturns code  to be renedered for navigation section, creating links that refer to handlePageChange method to change  the page being  vieweed
function Navigation({ currentPage, handlePageChange }) {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <a
                href="#about-me"
                onClick={() => handlePageChange('about-me')}
                className={currentPage === 'about-me' ? 'bg-primary text-white w-25  text-center' : 'w-25 text-center'}
            >About Me
            </a>
            <a
                href="#portfolio"
                onClick={() => handlePageChange('portfolio')}
                className={currentPage === 'portfolio' ? 'bg-primary text-white w-25 text-center' : 'w-25 text-center'}
            >Portfolio
            </a>
            <a
                href="#resume"
                onClick={() => handlePageChange('resume')}
                className={currentPage === 'resume' ? 'bg-primary text-white w-25 text-center' : 'w-25 text-center'}
            >Resume
            </a>
            <a
                href="#contact"
                onClick={() => handlePageChange('contact')}
                className={currentPage === 'contact' ? 'bg-primary text-white w-25 text-center' : 'w-25 text-center'}
            >Contact
            </a>
        </Box>
    );
}

export default Navigation;