import React from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
  w: any,
  color: any,
}

export default function Logo({ w, color }: Props): JSX.Element {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Paulo Lacerda
      </Text>
    </Box>
  );
}
