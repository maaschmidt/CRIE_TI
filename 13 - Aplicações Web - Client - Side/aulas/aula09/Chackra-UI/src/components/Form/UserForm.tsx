import { VStack, GridItem, SimpleGrid, Flex, Button, Grid, Box } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "../../pages/UserCreate";
import axios from "axios";
import { toast } from "react-toastify";

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

export function UserForm() {
  const navigate = useNavigate()
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

  const { handleSubmit, formState } = methods;

  async function handleCreateNewUser(data: User) {
    try {
      await axios.post("http://localhost:3000/users", {
        name: data.name,
        email: data.email,
        password: data.password,
        age: data.age,
        sex: data.sex
      })
      navigate('/users')
    } catch (error) {
      toast.error("Erro ao criar usuário")
    }
  }

  const errors = formState.errors;
  

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={handleSubmit(handleCreateNewUser)}>
        <VStack spacing='8'>
          <Grid
            w='100%'
            templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(10, 1fr)']}
            gap='2'
          >
            <GridItem colSpan={3}>
              <Input name="name" label="Nome Completo" errorMessage={errors.name?.message}/>
            </GridItem>
            <GridItem colSpan={4}>
              <Input name="email" label="Email" errorMessage={errors.email?.message}/>
            </GridItem>
            <GridItem colSpan={2}>
              <Input name="gender" label="Genero" errorMessage={errors.sex?.message}/>
            </GridItem>
            <GridItem colSpan={1}>
              <Input name="age" label="Idade" errorMessage={errors.age?.message}/>
            </GridItem>
          </Grid>
          <SimpleGrid minChildWidth='240px' spacing='2' w='100%' >
            <Input name="password" label="Senha" type="password" errorMessage={errors.password?.message}/>
            <Input name="password_confirmation" label="Confirmação de Senha" type="password" errorMessage={errors.password_confirmation?.message}/>
          </SimpleGrid>
        </VStack>
        <Flex mt='8' justify='flex-end' gap='4'>
          <Link to='/users'>
            <Button colorScheme='whiteAlpha'>Cancelar</Button>
          </Link>
          <Button colorScheme='purple'>Salvar</Button>
        </Flex>
      </Box>
    </FormProvider>
  )
}