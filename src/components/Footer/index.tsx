import React from 'react';
import {
  Stack, Text, Box,
} from '@chakra-ui/react';

export default function Footer(): JSX.Element {
  return (
    <Box
      marginTop={10}
      backgroundColor="purple.200"
      height="100"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        textAlign="center"
      >
        Feito com React e ChakraUI
      </Text>
    </Box>
  );
}
