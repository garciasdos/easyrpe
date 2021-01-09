import Head from 'next/head';
import { useAuth } from '../lib/auth';
import { Button, ButtonGroup, Code, Heading, Text } from "@chakra-ui/react"

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current user: <Code>{auth?.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth?.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGoogle()}>Sign In</Button>
        )}
      </main>

      <footer>
      </footer>
    </div>
  );
};

export default Home;