import React from 'react';
import pic from "../../assets/new-profile-pic.png";
import { GridItem, Heading, Image, Text, Box } from "@chakra-ui/react"

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
        pl={24}
      >
        <Heading
          fontSize="7xl"
          w="352px"
          fontWeight="700"
          color="blue.700"
          textAlign="center"
          zIndex="2"
          alignSelf="start"

        >
          About Me
        </Heading>
        <Box
          display="flex"
          flexDirection="row"
        >
          <Box
            borderRadius='10px'
            backgroundColor="white"
            px={5}
            py={5}
            maxWidth="50%"
            boxShadow="base"
          >
            <Image
              borderRadius='10px'
              src={pic}
              alt="Profile Picture">
            </Image>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth="50%"
            justifyContent="space-between"
            px={5}
            py={5}
          >
            <Text
              color="gray.500"
              pb={3}
              fontSize="2xl"
              zIndex="2"
            >
              Full stack web developer with background in chemical engineering and management consulting.<br></br><br></br>Interested in designing games, music, and good food.
            </Text>
            <Box
              px={6}
              mb={6}
              as="a"
              fontSize="2xl"
              href="https://drive.google.com/file/d/1vI5HW-Z7eMg4IGimtN41F95RE3Zdgmit/view?usp=sharing"
              zIndex="2"
              borderColor="gray.500"
              borderWidth="2px"
              color="gray.500"
              borderRadius="10px"
              alignSelf="center"
              _hover={{
                backgroundColor: "blue.700",
                borderColor: "blue.700",
                color: "white"
              }}
            >
              Download Resume
            </Box>
          </Box>
        </Box>
      </GridItem>
  );
}

export default About;