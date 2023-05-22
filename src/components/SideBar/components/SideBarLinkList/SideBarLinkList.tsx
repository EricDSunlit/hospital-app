import { ROUTES_LINKS } from "@/routes/routes-links"
import { Stack } from "@chakra-ui/react"
import SideBarLink from "../SideBarLinks/SideBarLink"

const SideBarLinkList: React.FC = () => {
  return (
    <Stack spacing="10px">
      {ROUTES_LINKS.map((link, index) => (
        <SideBarLink key={index} link={link} />
      ))}
    </Stack>
  )
}

export default SideBarLinkList
