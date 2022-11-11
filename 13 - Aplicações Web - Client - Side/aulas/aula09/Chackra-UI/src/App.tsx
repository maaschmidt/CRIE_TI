import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/theme'
import { Router } from './Router';
import { SidebarDrawerProvider } from './components/contexts/SidebarDrawerContext';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <ToastContainer>
        <ChakraProvider theme={theme} >
          <SidebarDrawerProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </SidebarDrawerProvider>
        </ChakraProvider>
      </ToastContainer>
    </AuthProvider>
  )
}

export default App
