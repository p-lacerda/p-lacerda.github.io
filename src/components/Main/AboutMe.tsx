import React from 'react';
import {
  Stack, Text, Box,
} from '@chakra-ui/react';

export default function AboutMe(): JSX.Element {
  return (
    <Box
      marginTop={10}
    >
      <Text
        fontSize="xl"
        textAlign="center"
        fontWeight={700}
      >
        Sobre Mim
      </Text>
      <p>
        Nasci no Piauí e sou apaixonado por Tecnologia e Games desde criança. Fazia meus blogs pessoais e gostava bastante de fuçar nas opções e personalizar os sites do meu jeito, que me fez interagir bastante com Javascript e CSS na época.
      </p>
    </Box>
  );
}
