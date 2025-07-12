import { Box, Heading, Input, Button, Stack } from '@chakra-ui/react';

function LoginPage() {
  return (
    <Box py={12} px={4} maxW="sm" mx="auto">
      <Heading as="h2" size="lg" mb={6}>Login</Heading>
      <Stack spacing={4}>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal">Login</Button>
      </Stack>
    </Box>
  );
}

export default LoginPage;
