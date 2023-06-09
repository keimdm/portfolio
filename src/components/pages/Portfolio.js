import React, { useState } from 'react';
import cocktail from '../../assets/cocktail-pic-square.jpg';
import lifelog from '../../assets/lifelog-pic-square.jpg';
import weather from '../../assets/weather-pic-square.jpg';
import dada from '../../assets/dada-square.jpg';
import tableTennis from '../../assets/table-tennis-pic-square.jpg';
import ticTacToe from '../../assets/tic-tac-toe-pic-square.jpg';
import exceed from '../../assets/exceed-square.jpg';
import Project from './Project';
import BigProject from './BigProject';
import { GridItem, Box, Heading } from "@chakra-ui/react"

// returns  portfolio section with project cards
function Portfolio({colorMode, colors}) {

  // data about projects

  const bigProjects = [
    {
      id: 1,
      title: "Exceed",
      github: "https://github.com/keimdm/exceed-game",
      deployed: "https://exceed-game-957f84648e44.herokuapp.com/",
      image: exceed,
      description: "Exceed is a spreadsheet training tool that uses a game to teach users how to navigate a spreadsheet efficiently",
      skills: "Skills/Technologies Used: MERN Stack (ES6), Vite, Chakra UI, React Router, JSON Web Token, bcrypt"
    },
    {
      id: 2,
      title: "Dada Museum",
      github: "https://github.com/ColdWeatherBoyy/dada-museum",
      deployed: "https://dada-museum.herokuapp.com/",
      image: dada,
      description: "Theoretical home page for an imaginary museum dedicated to the Dada art movement of the 1920s",
      skills: "Skills/Technologies Used: React, Chakra UI, Framer Motion, Art Institute of Chicago API"
    },
    {
      id: 3,
      title: "Lifelog",
      github: "https://github.com/emmaparis/Project-2",
      deployed: "https://lifelog.herokuapp.com/",
      image: lifelog,
      description: "Organization app for users to make to-do lists and add notes to them",
      skills: "Skills/Technologies Used: Express, Node, Handlebars, MVC framework, Express Sessions, MySQL, Sequelize, CRUD operations"
    },
  ]

  const projects = [

    {
      id: 1,
      title: "Breezy Cocktail",
      github: "https://github.com/keimdm/recipe-search",
      deployed: "https://keimdm.github.io/recipe-search/",
      image: cocktail,
    },
    {
      id: 2,
      title: "Weather App",
      github: "https://github.com/keimdm/weather-challenge",
      deployed: "https://keimdm.github.io/weather-challenge/",
      image: weather,
    },
    {
      id: 3,
      title: "Table Tennis",
      github: "https://github.com/keimdm/table-tennis",
      deployed: "https://keimdm.github.io/table-tennis/",
      image: tableTennis
    },
    {
      id: 4,
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
        colStart={{base: 1, md: 3}}
        colEnd={{base: 21, md: 19}}
        rowStart={1}
        rowEnd={20}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="start"
        zIndex="2"
        pl={{base: 0, md: 24}}
      >
        <Heading
          fontSize={{base: "6xl", md: "7xl"}}
          fontWeight="700"
          color={colorMode === "light" ? colors.accentLight : colors.accentDark}
          textAlign="center"
          zIndex="2"
          alignSelf={{base: "center", md: "start"}}
          mb={3}
          mt={14}
        >
          Portfolio
        </Heading>
        {
          bigProjects.map((item, index) => (
            <BigProject item={item} index={index} colorMode={colorMode} colors={colors}/>
          ))
        }
        <Box
          px={6}
          mb={6}
          mt={9}
          display={moreVisible ? "none" : "block"}
          fontSize={{base: "xl", md: "2xl"}}
          zIndex="2"
          borderColor={colorMode === "light" ? colors.standardLight : colors.standardDark}
          borderWidth="2px"
          color={colorMode === "light" ? colors.standardLight : colors.standardDark}
          borderRadius="10px"
          alignSelf="center"
          onClick={() => setMoreVisible(true)}
          _hover={{
            backgroundColor: colorMode === "light" ? colors.accentLight : colors.accentDark,
            borderColor: colorMode === "light" ? colors.accentLight : colors.accentDark,
            color: colorMode === "light" ? colors.backgroundLight : colors.backgroundDark,
            cursor: "pointer"
          }}
        >
          See More
        </Box>
        <Box
          display={moreVisible ? "flex" : "none"}
          flexDirection="column"
        >
          <Heading
            fontSize={{base: "6xl", md: "7xl"}}
            fontWeight="700"
            color={colorMode === "light" ? colors.accentLight : colors.accentDark}
            textAlign="center"
            zIndex="2"
            alignSelf={{base: "center", md: "start"}}
            mb={3}
            mt={14}
          >
            Bootcamp Classwork
          </Heading>
          <Box
            display="flex"
            flexDirection={{base: "column", md: "row"}}
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {
              projects.map((item, index) => (
                <Project item={item} index={index} colorMode={colorMode} colors={colors}/>
              ))
            }
          </Box>
          <Box
            px={6}
            mb={6}
            mt={9}
            fontSize={{base: "xl", md: "2xl"}}
            zIndex="2"
            borderColor={colorMode === "light" ? colors.standardLight : colors.standardDark}
            borderWidth="2px"
            color={colorMode === "light" ? colors.standardLight : colors.standardDark}
            borderRadius="10px"
            alignSelf="center"
            onClick={() => setMoreVisible(false)}
            _hover={{
              backgroundColor: colorMode === "light" ? colors.accentLight : colors.accentDark,
              borderColor: colorMode === "light" ? colors.accentLight : colors.accentDark,
              color: colorMode === "light" ? colors.backgroundLight : colors.backgroundDark,
              cursor: "pointer"
            }}
          >
            Hide More
          </Box>
        </Box>
        
      </GridItem>
  );
}

export default Portfolio;