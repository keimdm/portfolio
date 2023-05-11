import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

// renders code to generate cards in portfolio section
function Project({item, index}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="48%"
    >
      <Heading
        fontSize="5xl"
        color="gray.500"
        fontWeight="300"
      >
        {item.title}
      </Heading>
      <Box
        borderRadius='10px'
        backgroundColor="white"
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
          fontSize="2xl"
          href={item.github}
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
          View GitHub
        </Box>
        <Box
          px={6}
          mb={6}
          ml={5}
          as="a"
          fontSize="2xl"
          href={item.deployed}
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
          View App
        </Box>
      </Box>
    </Box>
    
  );
}

export default Project;
