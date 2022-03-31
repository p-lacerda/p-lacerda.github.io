import React from 'react';
import { Link, Text } from '@chakra-ui/react';

type Props = {
  children: string,
  to: string,
}

export default function MenuItem({
  children, to = '/',
}: Props): JSX.Element {
  return (
    <Link href={to}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  );
}
