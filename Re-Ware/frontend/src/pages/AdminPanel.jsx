import { Tabs, TabsList, TabsTrigger, TabsContent, Stack, Button, Box, Heading } from '@chakra-ui/react';

function AdminPanel() {
  return (
    <Box py={8} px={4}>
      <Heading as="h2" size="lg" mb={6}>Admin Panel</Heading>
      <Tabs defaultValue="users" variant="enclosed">
        <TabsList>
          <TabsTrigger value="users">Manage Users</TabsTrigger>
          <TabsTrigger value="items">Manage Items</TabsTrigger>
          <TabsTrigger value="collections">Manage Collections</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <Stack spacing={3}>
            {/* User moderation actions go here */}
            <Box p={4} bg="gray.50" borderRadius="md">
              User #1 <Button size="sm" colorScheme="red" ml={4}>Remove</Button>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md">
              User #2 <Button size="sm" colorScheme="red" ml={4}>Remove</Button>
            </Box>
          </Stack>
        </TabsContent>
        <TabsContent value="items">
          <Stack spacing={3}>
            {/* Item moderation actions go here */}
            <Box p={4} bg="gray.50" borderRadius="md">
              Item #1 <Button size="sm" colorScheme="green" ml={4}>Approve</Button>
              <Button size="sm" colorScheme="red" ml={2}>Reject</Button>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md">
              Item #2 <Button size="sm" colorScheme="green" ml={4}>Approve</Button>
              <Button size="sm" colorScheme="red" ml={2}>Reject</Button>
            </Box>
          </Stack>
        </TabsContent>
        <TabsContent value="collections">
          <Stack spacing={3}>
            {/* Collection management actions go here */}
            <Box p={4} bg="gray.50" borderRadius="md">
              Collection #1 <Button size="sm" colorScheme="blue" ml={4}>Edit</Button>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md">
              Collection #2 <Button size="sm" colorScheme="blue" ml={4}>Edit</Button>
            </Box>
          </Stack>
        </TabsContent>
      </Tabs>
    </Box>
  );
}

export default AdminPanel;
