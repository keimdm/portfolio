import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Grid
} from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import CloudAlt from './components/CloudAlt';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import theme from './theme';
import './theme/styles.css'

function App() {

  const [lefts, setLefts] = useState([window.innerWidth, window.innerWidth - (window.innerWidth + 800)/2]);
  const [currentPage, setCurrentPage] = useState('home');
  const [colorMode, setColorMode] = useState(window.localStorage.getItem("dkPortfolioColorMode") || "light");
  const clouds = [
    {
      top: 10,
      link: "https://keimdm.github.io/tic-tac-toe/"
    },
    {
      top: window.innerHeight - 450,
      link: "https://keimdm.github.io/table-tennis/"
    },
  ];
  const colors = {
    standardLight: "gray.500",
    standardDark: "gray.300",
    accentLight: "blue.700",
    accentDark: "blue.400",
    gradientLight: 'linear(to-bl, yellow.50 0%, red.100 100%)',
    gradientDark: 'linear(to-bl, blue.900 0%, purple.800 100%)',
    linkStandardLight: "#718096",
    linkStandardDark: "#CBD5E0",
    linkActiveLight: "#2C5282",
    linkActiveDark: "#4299E1",
    backgroundLight: "white",
    backgroundDark: "gray.700"
  }

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
      return <About colorMode={colorMode} colors={colors}/>;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio colorMode={colorMode} colors={colors}/>;
    }
    if (currentPage === 'home') {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange} colorMode={colorMode} colors={colors}/>;
    }
    return <Contact />;
  };

  // handles a page  change when someone clicks  on the navigation links
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider theme={theme}>
      <Grid
        minH={{base: window.innerHeight, md: '100vh'}}
        w={{base: "100%", md: '100%'}}
        bgGradient={colorMode === "light" ? colors.gradientLight : colors.gradientDark}
        px={5}
        py={2}
        templateColumns={{base: "repeat(1, 1fr)", md: 'repeat(20, 1fr)'}}
        templateRows={{base: "repeat(1, 1fr) 25px", md: 'repeat(19, 1fr) 25px'}}

      >
        {
          clouds.map((cloudEntry, index) => (
            <CloudAlt cloudEntry={cloudEntry} index={index} leftValue={lefts[index]} currentPage={currentPage} colorMode={colorMode} colors={colors}/>
          ))
        }
        <Header currentPage={currentPage} handlePageChange={handlePageChange} colorMode={colorMode} setColorMode={setColorMode} colors={colors} />
        {renderPage()}
        <Footer colorMode={colorMode} colors={colors} />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
