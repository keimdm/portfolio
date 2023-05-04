import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  Box,
} from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState('about-me');

  // deteremines which page to show
  const renderPage = () => {
    if (currentPage === 'about-me') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  // handles a page  change when someone clicks  on the navigation links
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider theme={theme}>
      <Box 
        w='100%'
        h='100%'
        bgGradient='linear(to-bl, yellow.50 0%, orange.100 100%)'
        display="flex"
        flexDirection={{base: "column", lg: "row"}}
        px={5}
        py={3}
      >
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
