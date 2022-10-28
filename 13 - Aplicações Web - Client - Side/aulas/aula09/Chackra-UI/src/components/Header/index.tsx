import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { List } from "phosphor-react";
import { SidebarDrawerContext } from "../contexts/SidebarDrawerContext";
import { useContext } from "react";

export function Header() {
  const { onOpen } = useContext(SidebarDrawerContext);
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex as="header"
      w='100%'
      h='20'
      maxW={1480}
      mx='auto'
      mt='4'
      pb='2'
      px='6'
      align='center'
      borderBottomWidth={2}
      borderColor='gray.700'
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Abrir Navegação"
          icon={<Icon as={List} />}
          fontSize={24}
          variant='unstyled'
          mr='2'
          onClick={onOpen}
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align='center' ml='auto'>
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}