import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href={"users/create"} passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                {isWideVersion ? "Criar novo usuário" : "Novo usuário"}
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                {isWideVersion && (
                  <Th px="6" color="gray.300" width="8">
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Th>
                )}
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {isWideVersion && (
                  <Td px="6">
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Td>
                )}
                <Td>
                  <Box>
                    <Text fontWeight="bold">Álvaro Ferreira</Text>
                    <Text fontSize="small" color="gray.300">
                      alvarorfj@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>01/01/2022</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                {isWideVersion && (
                  <Td px="6">
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Td>
                )}
                <Td>
                  <Box>
                    <Text fontWeight="bold">Álvaro Ferreira</Text>
                    <Text fontSize="small" color="gray.300">
                      alvarorfj@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>01/01/2022</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                {isWideVersion && (
                  <Td px="6">
                    <Checkbox colorScheme="pink"></Checkbox>
                  </Td>
                )}
                <Td>
                  <Box>
                    <Text fontWeight="bold">Álvaro Ferreira</Text>
                    <Text fontSize="small" color="gray.300">
                      alvarorfj@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>01/01/2022</Td>}
                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination></Pagination>
        </Box>
      </Flex>
    </Box>
  );
}
