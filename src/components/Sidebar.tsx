import { Box, Stack, Text, Link, Icon} from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from 'react-icons/ri'
export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">Geral</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiDashboardLine}></Icon>
                            <Text ml="4" fontWeight="medium">Dashboard</Text>
                        </Link>
                        <Link display="flex" alignItems="center">
                            <Icon as={RiContactsLine}></Icon>
                            <Text ml="4" fontWeight="medium">Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">Automação</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignItems="center">
                            <Icon as={RiInputMethodLine}></Icon>
                            <Text ml="4" fontWeight="medium">Formulário</Text>
                        </Link>
                        <Link display="flex" alignItems="center">
                            <Icon as={RiGitMergeLine}></Icon>
                            <Text ml="4" fontWeight="medium">Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}