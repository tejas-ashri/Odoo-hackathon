import { Box, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';

function LandingPage() {
  return (
    <Box py={12} px={4} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>Welcome to ReWear</Heading>
      <Text fontSize="xl" mb={8}>A community clothing exchange for sustainable fashion.</Text>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center" mb={8}>
        <Button colorScheme="teal" size="lg">Start Swapping</Button>
        <Button variant="outline" colorScheme="teal" size="lg">Browse Items</Button>
        <Button variant="ghost" colorScheme="teal" size="lg">List an Item</Button>
      </Stack>
      <Flex justify="center" wrap="wrap" gap={6}>
        {/* Featured items carousel or grid will go here */}
        <Box w="200px" h="250px" bg="gray.100" borderRadius="md" boxShadow="sm" />
        <Box w="200px" h="250px" bg="gray.100" borderRadius="md" boxShadow="sm" />
        <Box w="200px" h="250px" bg="gray.100" borderRadius="md" boxShadow="sm" />
      </Flex>
    </Box>
  );
}

export default LandingPage; 