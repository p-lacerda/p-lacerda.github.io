import {
  Stack, Text, Box, Button,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, MdOutlineEmail } from 'react-icons/all';
import React from 'react';

// type Props = {
// }

export default function TopContent(): JSX.Element {
  return (
    <Box>
      <Text
        fontSize="xl"
        textAlign="center"
      >
        Olá meu nome é
        <strong> Paulo de Tasso </strong>
      </Text>
      <Text textAlign="center">
        Atualmente, sou um
        {' '}
        <strong>Desenvolvedor Fullstack Web </strong>
        que estuda Ciência da Computação.
      </Text>
      <Stack spacing={3} pt={[4, 4, 0, 0]}>
        <Button aria-label="Link para o Github" leftIcon={<AiFillGithub />}>
          Github
        </Button>
        <Button aria-label="Link para o Linkedin" leftIcon={<AiFillLinkedin />}>
          LinkedIn
        </Button>
        <Button aria-label="Link para meu E-mail" leftIcon={<MdOutlineEmail />}>
          Email
        </Button>
      </Stack>
    </Box>
  );
}
