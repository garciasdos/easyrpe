import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Flex, Button, ButtonGroup, Code, Heading, Text } from "@chakra-ui/react"

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Easy RPE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="main" direction="column" align="center" justify="center">
        <Heading>Easy RPE</Heading>
        <Text>
          Current user: <Code>{auth?.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth?.user ? (
          <Button variant="ghost" mt={4} size="sm" onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button variant="ghost" mt={4} size="sm" onClick={(e) => auth.signinWithGoogle()}>Sign In</Button>
        )}
      </Flex>

      <footer>
      </footer>
    </div>
  );
};

export default Home;