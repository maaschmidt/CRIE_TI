import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/theme'
import { Router } from './Router';
import { SidebarDrawerProvider } from './components/contexts/SidebarDrawerContext';

function App() {
  return (
    <ChakraProvider theme={theme} >
      <SidebarDrawerProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default App
