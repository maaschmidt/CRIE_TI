import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ number, isCurrent = false }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        w='4'
        colorScheme='purple'
        disabled
        _disabled={{ bg: 'purple.500', cursor: 'default' }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size='sm'
      fontSize='xs'
      w='4'
      _hover={{ bg: 'purple.500' }}
      colorScheme='whiteAlpha'
    >
      {number}
    </Button>
  )
}