import { ReactElement } from "react";
import { PencilSimple, Trash } from "phosphor-react";
import { Box, Button, Checkbox, HStack, Icon, IconButton, Text, Table as TableChakra, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

interface TableProps {
  header: string[];
  children: ReactElement;
}

export function Table({ header, children }: TableProps){
  return (
    <TableChakra>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color='gray.300' w='8'>
                  <Checkbox colorScheme='purple' />
                </Th>
                {header.map((element) => {
                  return <Th key='th'>{element}</Th>
                })}
              </Tr>
            </Thead>
            {children}
          </TableChakra>
  )
}