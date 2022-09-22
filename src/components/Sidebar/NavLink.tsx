import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    linkName: string;
}
export function NavLink({icon, linkName, ...rest}: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon}></Icon>
      <Text ml="4" fontWeight="medium">
        {linkName}
      </Text>
    </Link>
  );
}
