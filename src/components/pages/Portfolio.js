import React from 'react';
import cocktail from '../../assets/cocktail-pic.jpg';
import lifelog from '../../assets/lifelog-pic.jpg';
import weather from '../../assets/weather-pic.jpg';
import music from '../../assets/music-sequencer.png';
import tableTennis from '../../assets/table-tennis-pic.jpg';
import ticTacToe from '../../assets/tic-tac-toe-pic.jpg';
import Project from './Project';
import { GridItem, Box, Text } from "@chakra-ui/react"

// returns  portfolio section with project cards
function Portfolio() {

  // data about projects
  const projects = [
    {
      id: 1,
      title: "Breezy Cocktail",
      github: "https://github.com/keimdm/recipe-search",
      deployed: "https://keimdm.github.io/recipe-search/",
      image: cocktail
    },
    {
      id: 2,
      title: "LifeLog",
      github: "https://github.com/emmaparis/Project-2",
      deployed: "https://lifelog.herokuapp.com/",
      image: lifelog
    },
    {
      id: 3,
      title: "Weather App",
      github: "https://github.com/keimdm/weather-challenge",
      deployed: "https://keimdm.github.io/weather-challenge/",
      image: weather
    },
    {
      id: 4,
      title: "Music Sequencer",
      github: "https://github.com/keimdm/music-sequencer",
      deployed: "https://keimdm.github.io/music-sequencer/",
      image: music
    },
    {
      id: 5,
      title: "Table Tennis",
      github: "https://github.com/keimdm/table-tennis",
      deployed: "https://keimdm.github.io/table-tennis/",
      image: tableTennis
    },
    {
      id: 6,
      title: "Tic-Tac-Toe",
      github: "https://github.com/keimdm/tic-tac-toe",
      deployed: "https://keimdm.github.io/tic-tac-toe/",
      image: ticTacToe
    },
  ]

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
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Text
            w="352px"
            fontFamily="serif"
            fontSize="5xl"
            color="gray.500"
            textAlign="center"
            zIndex="2"
          >
            Portfolio
          </Text>
          {
            projects.map((item, index) => (
              <Project item={item} index={index}/>
            ))
          }
        </Box>
      </GridItem>
  );
}

export default Portfolio;