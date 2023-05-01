import { Button } from "@chakra-ui/react"
import { ReactNode } from "react"

export type CustomButtonProps = {
  isDirty: boolean
  isValid: boolean
  children: ReactNode
  type: "button" | "submit" | "reset" | undefined
  variant?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  isDirty,
  isValid,
  children,
  type,
  variant = "solid"
}) => {
  return (
    <Button
      variant={variant}
      marginTop={10}
      w="full"
      type={type}
      isDisabled={!isDirty || !isValid}
    >
      {children}
    </Button>
  )
}

export default CustomButton
