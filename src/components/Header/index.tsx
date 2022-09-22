import {
  Flex,
  Text,
  Input,
  Icon,
  HStack,
  Box,
  Avatar,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
  RiMenuLine,
} from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
  const { onOpen } = useSidebarDrawer();
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
      {!isWideVersion && <IconButton icon={<Icon as={RiMenuLine}></Icon>} fontSize="24" variant="unstyled" onClick={onOpen} aria-label="Open Navigation" mr="2"></IconButton>}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion}></Profile>
      </Flex>
    </Flex>
  );
}
