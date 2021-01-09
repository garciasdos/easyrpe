import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, Flex } from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
  <AuthProvider>
  <Flex flexDirection="column" backgroundColor="gray.200" h="100vh">
    <Navbar/>
    <Component {...pageProps} />
    </Flex>
  </AuthProvider>
  </ChakraProvider>
  );
}

export default MyApp;
