import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useContext } from "react";
import { SidebarDrawerContext } from "../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useContext(SidebarDrawerContext);
  const isDrowerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrowerSidebar) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement='left' >
        <DrawerOverlay>
          <DrawerContent bg='gray.800' p='8'>
            <DrawerCloseButton />
            <DrawerHeader>Navegação</DrawerHeader>
            <SidebarNav />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav />
    </Box>
  )

}