import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text
        fontWeight='bold'
        color='gray.400'
        fontSize='sm'
      >
        {title}
      </Text>
      <Stack spacing='4' align='stretch' mt='8'>
        {children}
      </Stack>
    </Box>
  )
}