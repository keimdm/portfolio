import React from 'react';
import pic from "../../assets/profile-pic.png";
import { GridItem } from "@chakra-ui/react"

// returns about section with picture and short bio
function About() {
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
        zIndex="2"
      >
        <h3>About</h3>
        <img className="w-50" src={pic} alt="Profile"></img>
        <p className="text-center">
          Full stack web developer with background in chemical engineering and management consulting.
        </p>
        <p className="text-center">
          Interested in designing games, music, and good food.
        </p>
      </GridItem>
  );
}

export default About;