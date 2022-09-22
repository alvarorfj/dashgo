import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection sectionName="Geral">
        <NavLink icon={RiDashboardLine} linkName="Dashboard" href={"/dashboard"}></NavLink>
        <NavLink icon={RiContactsLine} linkName="Usuários" href={"/users"}></NavLink>
      </NavSection>
      <NavSection sectionName="Automação">
        <NavLink icon={RiInputMethodLine} linkName="Formulários" href={"/forms"}></NavLink>
        <NavLink icon={RiGitMergeLine} linkName="Automação" href={"/automation"}></NavLink>
      </NavSection>
    </Stack>
  );
}
