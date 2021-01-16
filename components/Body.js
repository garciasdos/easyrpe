import Head from 'next/head';

import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack
} from '@chakra-ui/react';
import { SettingsIcon, QuestionIcon, createIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';
import { Logo } from './Logo';

const Body = (props) => {
  const auth = useAuth();

  if (!auth.user) {
    return null;
  }

  return (
    <Flex flexDirection="column" p={10}>
      <Flex pb={8}>
        <Heading size="lg">{props.title}</Heading>
      </Flex>
      <Box
        backgroundColor="white"
        borderRadius="base"
        justifyContent="center"
        p={12}
        boxShadow="lg"
      >
        {props.children}
      </Box>
    </Flex>
  );
};

export default Body;
