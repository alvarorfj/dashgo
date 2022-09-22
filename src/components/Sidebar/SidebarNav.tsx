import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
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
  );
}
