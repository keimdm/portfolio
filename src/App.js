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
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  // deteremines which page to show
  const renderPage = () => {
    if (currentPage === 'about-me') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'home') {
      return <Home />;
    }
    return <Contact />;
  };

  // handles a page  change when someone clicks  on the navigation links
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        bgGradient='linear(to-bl, yellow.50 0%, red.100 100%)'
        px={5}
      >
        <Box 
          w='100%'
          h='100%'
          display="flex"
          flexDirection={{base: "column", lg: "row"}}
        >
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
