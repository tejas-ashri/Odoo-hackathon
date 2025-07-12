import { Box, Heading, Text, Image, Button, Stack, Flex, Avatar } from '@chakra-ui/react';

function ItemDetailPage() {
  return (
    <Box py={8} px={4}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
        <Image src="https://via.placeholder.com/250" alt="Item" boxSize="250px" borderRadius="md" />
        <Box flex={1}>
          <Heading as="h2" size="lg" mb={2}>Item Title</Heading>
          <Text color="gray.500" mb={4}>Category • Size • Condition</Text>
          <Text mb={4}>Full item description goes here. Details about the item, its history, and any other relevant info.</Text>
          <Flex align="center" mb={4}>
            <Avatar size="sm" name="Uploader Name" mr={2} />
            <Text color="gray.600">Uploaded by Uploader Name</Text>
          </Flex>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button colorScheme="teal">Swap Request</Button>
            <Button variant="outline" colorScheme="teal">Redeem via Points</Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ItemDetailPage; 