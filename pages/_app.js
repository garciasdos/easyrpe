import { AuthProvider } from '@/lib/auth';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import customTheme from '@/styles/theme';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <Box backgroundColor="gray.200" h="100vh">
          <Navbar />
          <Component {...pageProps} />
        </Box>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
