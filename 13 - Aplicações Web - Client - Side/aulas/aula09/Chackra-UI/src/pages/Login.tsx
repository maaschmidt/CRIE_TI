import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { Input } from '../components/Input';

export function Login() {
  return (
    <Flex w='100vw' h='100vh' align="center" justify="center">
      <Flex as="form" w="100%" maxW={360} p="8" bg="gray.700" borderRadius={8} direction='column'>
        <Stack spacing="4">
            <Input
              name='email'
              label='Email'
              type='email'
              placeholder="Digite seu email"
            />
            <Input
              name='password'
              label='Senha'
              type='password'
              placeholder="Digite sua senha"
            />
        </Stack>
        <Button type='submit' mt='6' size='lg' colorScheme='purple'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}