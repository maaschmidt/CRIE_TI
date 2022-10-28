import { Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = false} : ProfileProps) {
  return (
    <>
    {showProfileData && (
      <Box mr='4' textAlign='right'>
        <Text>Marcel Schmidt</Text>
        <Text fontSize='swall' color='gray.400'>marcel.schmidt@universo.univates.br</Text>
      </Box>
    )}
      <Avatar size='md' name="Marcel Schmidt" src="https://github.com/maaschmidt.png" />
    </>
  )
}