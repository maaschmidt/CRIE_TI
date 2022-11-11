import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, IconButton, Tbody, Td, Text, Th, Thead, theme, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { PencilSimple, Plus, Trash } from 'phosphor-react';
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";
import { Table } from '../components/Table'

import useUserEditModal from "../components/Modais/UserEditModal";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  email: string;
  age: number;
  sex: string;
}

export function UserList() {
  const { onOpen, UserEditModal } = useUserEditModal()
  const [users, setUsers] = useState<User[]>([]);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    axios.get<User[]>("http://localhost:3000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);


  return (
    <Flex direction='column' h='10vh'>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />
        <Box
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p='8'
          overflowY='auto'
          css={{
            "&::-webkit-scrollbar": {
              height: "2px"
            },
            "&::-webkit-scrollbar-track": {
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: theme.colors.purple[100],
              borderRadius: "12px",
            },
          }}
        >
          <Flex mb='8' justifyContent='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>
            <Link to='/users/create'>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='purple'
                leftIcon={<Icon as={Plus} />}
              >
                Novo Usuário
              </Button>
            </Link>
          </Flex>

          <Table header={["Usuário", "Idade", "Genero", ""]}>
            <Tbody>
              {users.map((user) => {
                return (
                  <><Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme='purple' />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>{user.name}</Text>
                        <Text fontSize='sm' color='gray.400'>
                          {user.email}
                        </Text>
                      </Box>
                    </Td>
                    <Td>{user.age}</Td>
                    <Td>{user.sex}</Td>
                  </Tr><Td>
                      {isWideVersion ? (
                        <HStack>
                          <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='blue'
                            leftIcon={<Icon as={PencilSimple} fontSize={16} />}
                            onClick={onOpen}
                          >
                            Editar
                          </Button>
                          <Button
                            size='sm'
                            fontSize='sm'
                            colorScheme='red'
                            leftIcon={<Icon as={Trash} fontSize={16} />}
                          >
                            Excluir
                          </Button>
                        </HStack>
                      ) : (
                        <HStack>
                          <IconButton
                            aria-label="Editar"
                            icon={<Icon as={PencilSimple} fontSize={16} />}
                            fontSize={24}
                            colorScheme='blue'
                            mr='2'
                            onClick={onOpen} />
                          <IconButton
                            aria-label="Excluir"
                            icon={<Icon as={Trash} fontSize={16} />}
                            fontSize={24}
                            colorScheme='red'
                            mr='2' />
                        </HStack>
                      )}
                    </Td></>
                )
              })}
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
      {UserEditModal}
    </Flex>
  )
}