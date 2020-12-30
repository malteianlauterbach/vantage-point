import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Box, Heading, Grid, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const theme = extendTheme({
  fonts: {
    body: "'Castoro', system-ui, sans-serif",
    heading: "'Playfair Display', serif",
    mono: "Menlo, monospace",
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(pageProps);
  return (
    <ChakraProvider theme={theme}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Box position="fixed" bottom="90px" width="
        </Box>
        <Box
          width={["100vw", "calc(95vw)", "calc(95vw)"]}
          paddingLeft={["10px", "250px", "250px"]}
          paddingRight={["10px", "0px", "0px"]}
          paddingBottom={["10px", "10px"]}
          paddingTop={["30px", "70px", "70px"]}
        >	
      </Grid>
    </ChakraProvider>
  );
}

export default MyApp;
