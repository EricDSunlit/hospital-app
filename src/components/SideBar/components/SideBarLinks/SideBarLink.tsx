import {
  Flex,
  Link as ChakraLink,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RouteLink } from "@/models/route-link.model"

interface SideBarLinkProps {
  link: RouteLink
}

const SideBarLink: React.FC<SideBarLinkProps> = ({ link }) => {
  const { to, icon, description } = link
  return (
    <>
      {link.subLinks ? (
        <Accordion
          borderColor="transparent"
          color="white"
          // fontFamily="sans-serif"
          borderRadius="lg"
          cursor="pointer"
          allowMultiple
          px={3}
        >
          <AccordionItem>
            <AccordionButton>
              <Flex as="span" flex="1" alignItems="center">
                <Icon
                  mr="4"
                  fontSize="25"
                  _groupHover={{
                    color: "white"
                  }}
                  as={icon}
                />
                {description}
              </Flex>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {link.subLinks.map((sublink) => (
                <ChakraLink
                  as={Link}
                  to={`/${sublink.to}`}
                  marginTop={5}
                  style={{ textDecoration: "none" }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Flex
                    align="center"
                    px={5}
                    mx={2}
                    color="white"
                    fontFamily="sans-serif"
                    borderRadius="lg"
                    height={50}
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "#BD514D"
                    }}
                  >
                    <Icon
                      mr="4"
                      fontSize="25"
                      _groupHover={{
                        color: "white"
                      }}
                      as={sublink.icon}
                    />
                    {sublink.description}
                  </Flex>
                </ChakraLink>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <ChakraLink
          as={Link}
          to={`/${to}`}
          marginTop={5}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            px={5}
            mx={2}
            color="white"
            fontFamily="sans-serif"
            borderRadius="lg"
            height={50}
            role="group"
            cursor="pointer"
            _hover={{
              bg: "#BD514D"
            }}
          >
            <Icon
              mr="4"
              fontSize="25"
              _groupHover={{
                color: "white"
              }}
              as={icon}
            />
            {description}
          </Flex>
        </ChakraLink>
      )}
    </>
  )
}

export default SideBarLink
