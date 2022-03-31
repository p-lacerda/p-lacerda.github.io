import React from 'react';
import { Container } from '@chakra-ui/react';
import TopContent from './TopContent';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

// type Props = {
// }

export default function Main(): JSX.Element {
  return (
    <Container paddingX="32px">
      <TopContent />
      <AboutMe />
      <Skills />
      <Projects />
    </Container>
  );
}
