import React from 'react';
import {
  Stack, Text, Box,
} from '@chakra-ui/react';
import ProjectCard from '../Projects/ProjectCard';

export default function Projects(): JSX.Element {
  return (
    <Box
      marginTop={10}
    >
      <Text
        fontSize="xl"
        textAlign="center"
        fontWeight={700}
      >
        Projetos
      </Text>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Box>
  );
}
