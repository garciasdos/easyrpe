import AddRoutineModal from '@/components/AddRoutineModal';
import { useAuth } from '@/lib/auth';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return (
    <Flex flexDirection="column" p={10}>
      <Flex pb={8}>
        <Heading size="lg">My routine</Heading>
      </Flex>
      <Box
        backgroundColor="white"
        width="100%"
        borderRadius="base"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={12}
        boxShadow="lg"
      >
        <Heading as="h2" size="md">
          You don't have any routines yet.
        </Heading>
        <Text borderRadius="sm">Try adding a new one 🦾</Text>
        <AddRoutineModal />
      </Box>
    </Flex>
  );
};

export default Dashboard;
