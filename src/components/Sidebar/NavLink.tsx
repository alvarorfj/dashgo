import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  linkName: string;
  href: string;
}
export function NavLink({ icon, linkName,href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon}></Icon>
        <Text ml="4" fontWeight="medium">
          {linkName}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
