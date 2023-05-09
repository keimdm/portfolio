import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Grid,
  Image
} from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import theme from './theme';
import './theme/styles.css'
import cloud from './assets/cloud-pic-big.png';

function App() {

  const [right, setRight] = useState(200);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
      const interval = setInterval(() => {
          setRight(right + 2);
      }, 100);

      //Clearing the interval
      return () => clearInterval(interval);
  }, [right]);

  // deteremines which page to show
  const renderPage = () => {
    if (currentPage === 'about-me') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'home') {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange}/>;
    }
    return <Contact />;
  };

  // handles a page  change when someone clicks  on the navigation links
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider theme={theme}>
      <Grid
        minH='100vh'
        w="100%"
        bgGradient='linear(to-bl, yellow.50 0%, red.100 100%)'
        px={5}
        py={2}
        templateColumns='repeat(20, 1fr)'
        templateRows='repeat(19, 1fr) 25px'
      >
        <Image
        src={cloud}
        alt="cloud sprite"
        position="fixed"
        right={right}
        >
        </Image>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
