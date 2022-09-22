import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection sectionName="Geral">
          <NavLink icon={RiDashboardLine} linkName="Dashboard"></NavLink>
          <NavLink icon={RiContactsLine} linkName="Usuários"></NavLink>
        </NavSection>
        <NavSection sectionName="Automação">
          <NavLink icon={RiInputMethodLine} linkName="Formulários"></NavLink>
          <NavLink icon={RiGitMergeLine} linkName="Automação"></NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
