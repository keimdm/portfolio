import React, { useState } from 'react';
import cocktail from '../../assets/cocktail-pic-square.jpg';
import lifelog from '../../assets/lifelog-pic-square.jpg';
import weather from '../../assets/weather-pic-square.jpg';
import music from '../../assets/music-sequencer-square.jpg';
import tableTennis from '../../assets/table-tennis-pic-square.jpg';
import ticTacToe from '../../assets/tic-tac-toe-pic-square.jpg';
import Project from './Project';
import BigProject from './BigProject';
import { GridItem, Box, Heading } from "@chakra-ui/react"

// returns  portfolio section with project cards
function Portfolio() {

  // data about projects

  const bigProjects = [
    {
      id: 1,
      title: "Breezy Cocktail",
      github: "https://github.com/keimdm/recipe-search",
      deployed: "https://keimdm.github.io/recipe-search/",
      image: cocktail,
      description: "Search for cocktail recipes, save your favorites, and get a daily seasonal cocktail recommendation",
      skills: "Skills/Technologies Used: HTML5, CSS, Javascript, Cocktail API"
    },
    {
      id: 2,
      title: "Lifelog",
      github: "https://github.com/emmaparis/Project-2",
      deployed: "https://lifelog.herokuapp.com/",
      image: lifelog,
      description: "Create an account, keep track of day to day to-do list items, and set recurring reminders",
      skills: "Skills/Technologies Used: Node.js, Handlebars, Express.js"
    },
    {
      id: 3,
      title: "Weather App",
      github: "https://github.com/keimdm/weather-challenge",
      deployed: "https://keimdm.github.io/weather-challenge/",
      image: weather,
      description: "Search for cocktail recipes, save your favorites, and get a daily seasonal cocktail recommendation",
      skills: "Skills/Technologies Used: HTML5, CSS, Javascript, Cocktail API"
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Music Sequencer",
      github: "https://github.com/keimdm/music-sequencer",
      deployed: "https://keimdm.github.io/music-sequencer/",
      image: music
    },
    {
      id: 2,
      title: "Table Tennis",
      github: "https://github.com/keimdm/table-tennis",
      deployed: "https://keimdm.github.io/table-tennis/",
      image: tableTennis
    },
    {
      id: 3,
      title: "Tic-Tac-Toe",
      github: "https://github.com/keimdm/tic-tac-toe",
      deployed: "https://keimdm.github.io/tic-tac-toe/",
      image: ticTacToe
    },
  ]

  const [moreVisible, setMoreVisible] = useState(false);

  // returns  code   to be rendered by looping through projects and building a card for  each (using project  component)
  return (
      <GridItem
        colStart={3}
        colEnd={19}
        rowStart={1}
        rowEnd={20}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="start"
        zIndex="2"
        pl={24}
      >
        <Heading
          fontSize="7xl"
          fontWeight="700"
          color="blue.700"
          textAlign="center"
          zIndex="2"
          alignSelf="start"
          mb={3}
          mt={14}
        >
          Portfolio
        </Heading>
        {
          bigProjects.map((item, index) => (
            <BigProject item={item} index={index}/>
          ))
        }
        <Box
          px={6}
          mb={6}
          mt={9}
          display={moreVisible ? "none" : "block"}
          fontSize="2xl"
          zIndex="2"
          borderColor="gray.500"
          borderWidth="2px"
          color="gray.500"
          borderRadius="10px"
          alignSelf="center"
          onClick={() => setMoreVisible(true)}
          _hover={{
            backgroundColor: "blue.700",
            borderColor: "blue.700",
            color: "white"
          }}
        >
          See More
        </Box>
        <Box
          display={moreVisible ? "flex" : "none"}
          flexDirection="column"
        >
          <Heading
            fontSize="7xl"
            fontWeight="700"
            color="blue.700"
            textAlign="center"
            zIndex="2"
            alignSelf="start"
            mb={3}
            mt={14}
          >
            More Projects
          </Heading>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {
              projects.map((item, index) => (
                <Project item={item} index={index}/>
              ))
            }
          </Box>
          <Box
            px={6}
            mb={6}
            mt={9}
            fontSize="2xl"
            zIndex="2"
            borderColor="gray.500"
            borderWidth="2px"
            color="gray.500"
            borderRadius="10px"
            alignSelf="center"
            onClick={() => setMoreVisible(false)}
            _hover={{
              backgroundColor: "blue.700",
              borderColor: "blue.700",
              color: "white"
            }}
          >
            Hide More
          </Box>
        </Box>
        
      </GridItem>
  );
}

export default Portfolio;