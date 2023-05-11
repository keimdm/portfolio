import React from 'react';
import { Box, Image, Text, Heading } from '@chakra-ui/react';

// renders code to generate cards in portfolio section
function BigProject({item, index}) {
  return (
    <Box
      display="flex"
      flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
      mb={9}
    >
      <Box
        borderRadius='10px'
        backgroundColor="red.500"
        px={5}
        py={5}
        maxWidth="50%"
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
        flexDirection="column"
        maxWidth="50%"
        justifyContent="space-between"
        px={5}
        py={5}
      >
        <Heading
          fontSize="5xl"
          color="gray.500"
          fontWeight="300"
        >
          {item.title}
        </Heading>
        <Text
          color="gray.500"
          pb={3}
          fontSize="2xl"
          zIndex="2"
        >
          {item.description}<br></br><br></br>{item.skills}
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Box
            px={6}
            mb={6}
            ml={5}
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
    </Box>
  );
}

export default BigProject;
