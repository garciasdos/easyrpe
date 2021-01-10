import Head from 'next/head';

import { Flex, Icon, IconButton, Link, Stack } from '@chakra-ui/react';
import { SettingsIcon, QuestionIcon, createIcon } from '@chakra-ui/icons';
import { useAuth } from '@/lib/auth';
import { Logo } from './Logo';

const Navbar = () => {
  const auth = useAuth();

  if (!auth.user) {
    return null;
  }

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      p={4}
    >
      <Stack
        spacing={5}
        justifyContent="flex-start"
        flexDirection="row"
        isInline
        alignItems="center"
      >
        <Logo fontSize="40px" />
        <Link>Routine</Link>
        <Link>My progress</Link>
      </Stack>
      <Flex alignItems="center">
        <SettingsIcon boxSize={9} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
