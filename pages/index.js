import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import {
  Flex,
  Button,
  ButtonGroup,
  Code,
  Heading,
  Text,
  Box,
  createIcon
} from '@chakra-ui/react';
import { Logo } from '@/components/Logo';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import useSWR from 'swr';

const Home = () => {
  const auth = useAuth();
  const { data, error } = useSWR('/api/users');

  console.log(data);
  return (
    <div>
      <Head>
        <title>Easy RPE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" p={10}>
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
          <Logo fontSize="20vw" />

          <Button
            onClick={() => auth.signinWithGoogle()}
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="medium"
            leftIcon={<GoogleIcon />}
            mt={4}
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Continue with Google
          </Button>
        </Box>
      </Flex>
      <footer></footer>
    </div>
  );
};

export default Home;
