import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

// renders code to generate cards in portfolio section
function Project({item, index, colorMode, colors}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={{base: "70%", md: "48%"}}
      mb={{base: 9, md: 0}}
    >
      <Heading
        fontSize={{base: "4xl", md: "5xl"}}
        color={colorMode === "light" ? colors.standardLight : colors.standardDark}
        fontWeight="300"
        textAlign={{base: "center", md: "start"}}
      >
        {item.title}
      </Heading>
      <Box
        borderRadius='10px'
        backgroundColor={colorMode === "light" ? colors.backgroundLight : colors.backgroundDark}
        px={5}
        py={5}
        mb={6}
        boxShadow="base"
      >
        <Image
          borderRadius='10px'
          src={item.image}
          alt={item.title}>
        </Image>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Box
          px={6}
          mb={6}
          as="a"
          fontSize={{base: "1xl", md: "2xl"}}
          href={item.github}
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
          View GitHub
        </Box>
        <Box
          px={6}
          mb={6}
          ml={5}
          as="a"
          fontSize={{base: "1xl", md: "2xl"}}
          href={item.deployed}
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
          View App
        </Box>
      </Box>
    </Box>
    
  );
}

export default Project;
