import { Box, Heading, Input, Textarea, Button, Stack, Select } from '@chakra-ui/react';

function AddItemPage() {
  return (
    <Box py={8} px={4} maxW="lg" mx="auto">
      <Heading as="h2" size="lg" mb={6}>List a New Item</Heading>
      <Stack spacing={4}>
        <Input type="file" accept="image/*" />
        <Input placeholder="Title" />
        <Textarea placeholder="Description" />
        <Select placeholder="Category">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </Select>
        <Input placeholder="Type" />
        <Input placeholder="Size" />
        <Input placeholder="Condition" />
        <Input placeholder="Tags (comma separated)" />
        <Button colorScheme="teal">Submit</Button>
      </Stack>
    </Box>
  );
}

export default AddItemPage; 