import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
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
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
