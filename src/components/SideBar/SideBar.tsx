import { Center, Divider, Flex, Image, Text, Box } from "@chakra-ui/react"
import { SideBarLinkList } from "./components/SideBarLinkList"

const SideBar: React.FC = () => {
  return (
    <Flex h="100vh" flexDirection="column" bg="#3B83BD">
      <Flex
        w="full"
        h={200}
        max-maxHeight={200}
        justifyContent="center"
        flexDirection="column"
      >
        <Center marginTop={5}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew="
            alt="logo image"
          />
        </Center>
        <Center marginTop={2}>
          <Text color="white" fontSize="lg">
            Consultorio Nieves
          </Text>
        </Center>
      </Flex>
      <Center marginTop={3}>
        <Divider w="80%" />
      </Center>
      <Box>
        <SideBarLinkList />
      </Box>
    </Flex>
  )
}

export default SideBar
