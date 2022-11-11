import { Box, Button, Divider, Flex, Grid, GridItem, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Sidebar } from "../components/Sidebar";
import * as zod from 'zod';
import { TypeOf } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newUserValidationSchema = zod.object({
  id: zod.number().optional(),
  name: zod.string().min(3, "Informe um nome válido"),
  email: zod.string().email("Informe email válido"),
  password: zod.string().min(5, 'miímo 5 caracteres'),
  password_confirmation: zod.string().min(5, 'miímo 5 caracteres'),
  age: zod.number(),
  sex: zod.string()
})
  .refine((data) => data.password === data.password_confirmation, {
    message: "Senhas não conferem",
    path: ["password_confirmation"]
  });

export type User = zod.infer<typeof newUserValidationSchema>;

export function UserCreate() {
  const methods = useForm<User>({
    resolver: zodResolver(newUserValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      age: undefined,
      sex: ""
    }
  })

  return (
    <Flex direction='column' h='10vh'>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>
          <Divider my='6' borderColor='gray.700' />
          
        </Box>
      </Flex>
    </Flex>
  )
}