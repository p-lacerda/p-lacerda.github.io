import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ProjectCard(): JSX.Element {
  return (
    <Center py={6}>
      <Box
        maxW="445px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
      >
        <Box
          h="210px"
          bg="gray.100"
          mt={-6}
          mx={-6}
          mb={5}
          pos="relative"
        />
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize="2xl"
            fontFamily="body"
          >
            Projeto
          </Heading>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </Text>
        </Stack>
        <Stack mt={6} direction="row" spacing="auto" align="center">
          <Text color="gray.500" fontSize="sm">Fev 08, 2021</Text>
          <Button>
            Acessar
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
