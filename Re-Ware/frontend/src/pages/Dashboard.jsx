import { Box, Heading, Text, Flex, Stack, Avatar, SimpleGrid } from '@chakra-ui/react';

function Dashboard() {
  return (
    <Box py={8} px={4}>
      <Flex align="center" mb={8}>
        <Avatar size="xl" name="User Name" mr={6} />
        <Box>
          <Heading as="h2" size="lg">User Name</Heading>
          <Text color="gray.500">Points: 100</Text>
        </Box>
      </Flex>
      <Heading as="h3" size="md" mb={4}>Uploaded Items</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
        {/* Uploaded items cards go here */}
        <Box h="150px" bg="gray.100" borderRadius="md" />
        <Box h="150px" bg="gray.100" borderRadius="md" />
      </SimpleGrid>
      <Heading as="h3" size="md" mb={4}>Swaps</Heading>
      <Stack spacing={3}>
        {/* Swaps list goes here */}
        <Box p={4} bg="gray.50" borderRadius="md">Swap #1 - Pending</Box>
        <Box p={4} bg="gray.50" borderRadius="md">Swap #2 - Completed</Box>
      </Stack>
    </Box>
  );
}

export default Dashboard; 