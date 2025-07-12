import { Box, Flex, Heading, Spacer, Button, Link as ChakraLink } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import ItemDetailPage from './pages/ItemDetailPage';
import AddItemPage from './pages/AddItemPage';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="gray.50">
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={4} bg="white" boxShadow="md">
          <Heading size="md">
            <ChakraLink as={Link} to="/">ReWear</ChakraLink>
          </Heading>
          <Spacer />
          <Button as={Link} to="/login" colorScheme="teal" variant="outline" mr={2}>Login</Button>
          <Button as={Link} to="/signup" colorScheme="teal">Sign Up</Button>
        </Flex>
        <Box as="main" p={6}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
            <Route path="/add-item" element={<AddItemPage />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
