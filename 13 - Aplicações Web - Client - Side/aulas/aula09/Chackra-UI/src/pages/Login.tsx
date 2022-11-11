import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Input } from '../components/Input';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { AuthContext } from '../contexts/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const newLoginValidationSchema = zod.object({
  email: zod
    .string()
    .min(1, "Informe o seu email")
    .email("Informe um e-mail válido"),
  password: zod.string().min(1, "Informe a sua senha"),
});

type Login = zod.infer<typeof newLoginValidationSchema>;


export function Login() {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [errorLogin, setErrorLogin] = useState("");

  const methods = useForm<Login>({
    resolver: zodResolver(newLoginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;

  async function handleSubmitLogin(data: Login) {
    const login = await signIn(data);
    if (login) {
      navigate("/users");
    } else {
      setErrorLogin("Login e/ou senha incorreto(s)");
    }
  }

  const errors = formState.errors;

  return (
    <Flex w='100vw' h='100vh' align="center" justify="center">
      <FormProvider {...methods}>
        <Flex as="form" onSubmit={handleSubmit(handleSubmitLogin)} w="100%" maxW={360} p="8" bg="gray.700" borderRadius={8} direction='column'>
          <Stack spacing="4">
            <Input
              name='email'
              label='Email'
              type='email'
              placeholder="Digite seu email"
              errorMessage={errors?.email?.message}
            />
            <Input
              name='password'
              label='Senha'
              type='password'
              placeholder="Digite sua senha"
              errorMessage={errors?.password?.message}
            />
          </Stack>
          <Button type='submit' mt='6' size='lg' colorScheme='purple'>
            Entrar
          </Button>
          {errorLogin && (
            <Text color='red' mt={3} align='center'>
              {errorLogin}
            </Text>
          )}
        </Flex>
      </FormProvider>
    </Flex>
  )
}