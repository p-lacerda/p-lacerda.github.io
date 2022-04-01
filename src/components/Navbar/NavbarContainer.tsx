import React from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
  children: any,
}

export default function NavbarContainer({ children }: Props): JSX.Element {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      top="0"
      bg={['black']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      position="sticky"
      zIndex="overlay"
    >
      { children }
    </Flex>
  );
}
