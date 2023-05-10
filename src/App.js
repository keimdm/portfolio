import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Grid
} from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cloud from './components/Cloud';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import theme from './theme';
import './theme/styles.css'
import cloud from './assets/cloud-pic-big-cropped.png';

function App() {

  const [lefts, setLefts] = useState([window.innerWidth, window.innerWidth - (window.innerWidth + 800)/2]);
  const [currentPage, setCurrentPage] = useState('home');
  const clouds = [
    {
      picture: cloud,
      top: 50
    },
    {
      picture: cloud,
      top: window.innerHeight - 450
    },
  ];

  useEffect(() => {
      const interval = setInterval(() => {
          let newLefts = [];
          for (let i = 0; i < lefts.length; i++) {
            if (lefts[i] <= -800) {
              newLefts.push(window.innerWidth);
            }
            else {
              newLefts.push(lefts[i] - 2);
            }
          }
          setLefts(newLefts);
      }, 50);

      return () => clearInterval(interval);
  });

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
        {
          clouds.map((cloudEntry, index) => (
            <Cloud cloudEntry={cloudEntry} index={index} leftValue={lefts[index]}/>
          ))
        }
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
