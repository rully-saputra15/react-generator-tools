import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import './App.css'
import HomeContainer from "./pages/home/containers/HomeContainer";

const App = () => {
  const theme = extendTheme({
    fonts: {
      heading: `'Lato', sans-serif`,
      body: `'Lato', sans-serif`,
    }
  })
  return (
      <ChakraProvider theme={theme}>
          <HomeContainer />
      </ChakraProvider>
  )
}

export default App
