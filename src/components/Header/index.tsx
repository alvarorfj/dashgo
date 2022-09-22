import {
  Flex,
  Text,
  Input,
  Icon,
  HStack,
  Box,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      align="center"
      px="6"
    >
      <Logo/>
      {isWideVersion && <SearchBox/>}
      <Flex align="center" ml="auto">
        <NotificationNav/>
        <Profile showProfileData={isWideVersion}></Profile>
      </Flex>
    </Flex>
  );
}
