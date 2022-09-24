import React from "react";
import { Flex, Button, Stack} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
});

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values, event, formState)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" {...register('email')} error={formState.errors.email}></Input>
          <Input name="password" type="password" label="Senha" {...register('password')} error={formState.errors.password}></Input>
          </Stack>
          <Button type="submit" marginTop={6} colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  );
}
