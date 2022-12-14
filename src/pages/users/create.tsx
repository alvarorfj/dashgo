import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";

import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const signInFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais')
});

export default function Createuser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values,
    event
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values, event, formState);
  };
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        
      >
        <Sidebar />
        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius="8" bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700"></Divider>
          <VStack spacing="8">
            <SimpleGrid spacing={["6", "8"]} minChildWidth="240px" w="100%">
              <Input
                name="name"
                type="name"
                label="Nome completo"
                {...register("name")}
                error={formState.errors.name}
              ></Input>
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
                error={formState.errors.email}
              ></Input>
            </SimpleGrid>
            <SimpleGrid spacing={["6", "8"]} minChildWidth="240px" w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={formState.errors.password}
              ></Input>
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                {...register("password_confirmation")}
                error={formState.errors.password_confirmation}
              ></Input>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href={"/users"}>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
