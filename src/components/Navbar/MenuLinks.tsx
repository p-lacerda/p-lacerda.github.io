import React from 'react';
import { Stack, Box, Button } from '@chakra-ui/react';
import MenuItem from './MenuItem';

type Props = {
  isOpen: boolean,
}

export default function MenuLinks({ isOpen }: Props): JSX.Element {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Sobre Mim</MenuItem>
        <MenuItem to="/how">Habilidades</MenuItem>
        <MenuItem to="/how">Projetos</MenuItem>
        <Button
          bgColor="purple"
        >
          Currículo

        </Button>
      </Stack>
    </Box>
  );
}
