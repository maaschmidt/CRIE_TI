import { Stack } from "@chakra-ui/react";
import { Gauge, UserList } from "phosphor-react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title="GERAL">
        <NavLink label="Dashboard" icon={Gauge} href={"/dashboard"} />
        <NavLink label="Usuários" icon={UserList} href={"/users"} />
      </NavSection>
    </Stack>
  )
}