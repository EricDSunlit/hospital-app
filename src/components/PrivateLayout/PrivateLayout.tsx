import { ReactNode, useState } from "react"

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react"
import { chakra } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import {
  HiOutlineArrowLeftOnRectangle,
  HiUserCircle,
  HiBars3
} from "react-icons/hi2"

import { SideBar } from "../SideBar"
import { motion } from "framer-motion"

interface PrivateLayoutProps {
  children: ReactNode
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleMenuVisibility = () => setIsOpen((prevState) => !prevState)
  const MotionBox = chakra(motion.div)

  return (
    <Grid h="100vh" w="100vw" templateColumns="repeat(5, 1fr)">
      <GridItem
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: `${isOpen ? "block" : "none"}`
        }}
        colSpan={{ lg: 1 }}
      >
        <MotionBox
          variants={{ visible: { x: 0 }, hidden: { x: -100 } }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <SideBar />
        </MotionBox>
      </GridItem>

      <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: isOpen ? 4 : 5 }}>
        <Flex flexDirection="column">
          <Box
            borderBottom="1px"
            borderColor="gray.300"
            mx={3}
            py={2}
            px={4}
            display="flex"
            justifyContent="space-between"
          >
            {isOpen ? (
              <IconButton
                onClick={handleMenuVisibility}
                colorScheme="blue"
                rounded="full"
                bg="gray"
                color="white"
                fontSize={18}
                aria-label="Close SideBar Icon"
                icon={<HiBars3 />}
              />
            ) : (
              <IconButton
                colorScheme="blue"
                onClick={handleMenuVisibility}
                rounded="full"
                bg="gray"
                color="white"
                fontSize={18}
                aria-label="Close SideBar Icon"
                icon={<HiBars3 />}
              />
            )}

            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                rightIcon={<ChevronDownIcon />}
              >
                Eric Nieves
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Icon
                    mr="2"
                    fontSize="25"
                    color="#3B83BD"
                    as={HiUserCircle}
                  />
                  Perfil
                </MenuItem>
                <MenuItem color="#BD514D">
                  <Icon
                    mr="2"
                    fontSize="25"
                    as={HiOutlineArrowLeftOnRectangle}
                  />
                  Cerrar sesión
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <MotionBox
            variants={{ visible: { x: 0 }, hidden: { x: -100 } }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Box p={5}>{children}</Box>
          </MotionBox>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default PrivateLayout
