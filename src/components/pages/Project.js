import React from 'react';
import { Box, Image } from '@chakra-ui/react';

// renders code to generate cards in portfolio section
function Project({item, index}) {
  return (
    <Box
      bgColor="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      boxShadow="base"
      mb={3}
      mr={3}
      px={5}
      py={5}
      >
      <p>{item.title}</p>
      <a href={item.github}>GitHub Link</a>
      <a href={item.deployed}>Deployed Application Link</a>
      <Image
        borderRadius='10px'
        h="180px"
        w="300px"
        objectFit='cover'
        src={item.image}
        alt={item.title}>
      </Image>
    </Box>
  );
}

export default Project;
