import { FormControl, FormLabel, Input as ChackraInput, InputProps as ChackraInputProps, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  errorMessage?: string | undefined;
}
export function Input({ name, label, errorMessage, ...rest }: InputProps) {
  const { register } = useFormContext();

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        id={name}
        bgColor='gray.900'
        variant='filled'
        borderColor={errorMessage && 'red'}
        size='lg'
        focusBorderColor='purple.700'
        _hover={{ bgColor: 'gray.900' }}
        {...register(name)}
        {...rest}
      />
      <Text color='red'>
        {errorMessage}
      </Text>
    </FormControl>
  )
}