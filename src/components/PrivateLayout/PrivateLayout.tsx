import { Button, Grid, GridItem } from "@chakra-ui/react"
import { ReactNode, useState } from "react"
import { SideBar } from "../SideBar"
import { chakra } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

interface PrivateLayoutProps {
  children: ReactNode
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleMenuVisibility = () => setIsOpen((prevState) => !prevState)
  const MotionBox = chakra(motion.div)

  return (
    <Grid h="100vh" w="100vw" templateColumns="repeat(5, 1fr)" gridGap={2}>
      <GridItem
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: `${isOpen ? "block" : "none"}`
        }}
        colSpan={{ lg: 1 }}
      >
        <AnimatePresence>
          <MotionBox
            variants={{ visible: { x: 0 }, hidden: { x: -100 } }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <SideBar />
          </MotionBox>
        </AnimatePresence>
      </GridItem>
      <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: isOpen ? 4 : 5 }}>
        <Button onClick={handleMenuVisibility}>Abrir</Button>
        {children}
      </GridItem>
    </Grid>
  )
}

export default PrivateLayout
