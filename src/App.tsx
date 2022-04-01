import './App.css';
import {
  Box,
} from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
    >
      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
