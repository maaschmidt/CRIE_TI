import { Box, Button, Divider, Flex, Grid, GridItem, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Sidebar } from "../components/Sidebar";

export function UserCreate() {
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
          <VStack spacing='8'>
            <Grid
              w='100%'
              templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(10, 1fr)']}
              gap='2'
            >
              <GridItem colSpan={3}>
                <Input name="name" label="Nome Completo" />
              </GridItem>
              <GridItem colSpan={4}>
                <Input name="email" label="Email" />
              </GridItem>
              <GridItem colSpan={2}>
                <Input name="gender" label="Genero" />
              </GridItem>
              <GridItem colSpan={1}>
                <Input name="age" label="Idade" />
              </GridItem>
            </Grid>
            <SimpleGrid minChildWidth='240px' spacing='2' w='100%' >
              <Input name="password" label="Senha" type="password" />
              <Input name="password_confirmation" label="Confirmação de Senha" type="password" />
            </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end' gap='4'>
            <Link to='/users'>
            <Button colorScheme='whiteAlpha'>Cancelar</Button>
            </Link>
            <Button colorScheme='purple'>Salvar</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}