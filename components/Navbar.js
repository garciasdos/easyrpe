import Head from 'next/head';

import { Flex, IconButton, Link, Stack } from "@chakra-ui/react";
import { SettingsIcon, QuestionIcon } from '@chakra-ui/icons';

const Navbar = () => (
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        p={4}
      >
        <Stack
          spacing={2}
          justifyContent="flex-start"
          flexDirection="row"
          isInline
          alignItems="center"
        >
          <QuestionIcon display="block" boxSize={9} />
          <Link>Routine</Link>
          <Link>My progress</Link>
        </Stack>
        <Flex alignItems="center">
          <SettingsIcon boxSize={9} />
        </Flex>
      </Flex>
  );

export default Navbar;