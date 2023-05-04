import React from 'react';

// reeturns code  to be renedered for navigation section, creating links that refer to handlePageChange method to change  the page being  vieweed
function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className="d-flex flex-row justify-content-around">
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
        </div>
    );
}

export default Navigation;