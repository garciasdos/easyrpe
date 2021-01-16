import AddRoutine from '@/components/AddRoutine';
import Body from '@/components/Body';
import { useAuth } from '@/lib/auth';
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.user) {
    return 'Loading...';
  }

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/routines/new');
  };

  return (
    <Body title="My routines">
      <VStack spacing={4}>
        <Heading as="h2" size="md">
          You don't have any routines yet.
        </Heading>
        <Text borderRadius="sm">Try adding a new one 🦾</Text>
        <Button
          variant="solid"
          size="md"
          backgroundColor="whatsapp.400"
          color="white"
          onClick={handleClick}
        >
          Add routine
        </Button>
      </VStack>
    </Body>
  );
};

export default Dashboard;
