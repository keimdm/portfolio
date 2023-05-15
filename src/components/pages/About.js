import React from 'react';
import pic from "../../assets/new-profile-pic.png";
import { GridItem, Heading, Image, Text, Box } from "@chakra-ui/react"

// returns about section with picture and short bio
function About({colorMode, colors}) {
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
          color={colorMode === "light" ? colors.accentLight : colors.accentDark}
          textAlign="center"
          zIndex="2"
          alignSelf="start"
          mb={3}
          mt={14}
        >
          About Me
        </Heading>
        <Box
          display="flex"
          flexDirection="row"
        >
          <Box
            borderRadius='10px'
            backgroundColor={colorMode === "light" ? colors.backgroundLight : colors.backgroundDark}
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
              color={colorMode === "light" ? colors.standardLight : colors.standardDark}
              pb={3}
              fontSize="2xl"
              zIndex="2"
            >
              Full stack web developer based in NYC with background in chemical engineering and management consulting.<br></br><br></br>Interested in designing games, music, and good food.
            </Text>
            <Box
              px={6}
              mb={6}
              as="a"
              fontSize="2xl"
              href="https://drive.google.com/file/d/1vI5HW-Z7eMg4IGimtN41F95RE3Zdgmit/view?usp=sharing"
              zIndex="2"
              borderColor={colorMode === "light" ? colors.standardLight : colors.standardDark}
              borderWidth="2px"
              color={colorMode === "light" ? colors.standardLight : colors.standardDark}
              borderRadius="10px"
              alignSelf="center"
              _hover={{
                backgroundColor: colorMode === "light" ? colors.accentLight : colors.accentDark,
                borderColor: colorMode === "light" ? colors.accentLight : colors.accentDark,
                color: colorMode === "light" ? colors.backgroundLight : colors.backgroundDark,
                cursor: "pointer"
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