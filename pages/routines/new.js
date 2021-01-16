import AddRoutine from '@/components/AddRoutine';
import AddRoutineModal from '@/components/AddRoutineModal';
import Body from '@/components/Body';
import { useAuth } from '@/lib/auth';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NewRoutine = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return (
    <Body title="New Routine">
      <AddRoutine></AddRoutine>
    </Body>
  );
};

export default NewRoutine;
