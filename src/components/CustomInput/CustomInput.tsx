import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text
} from "@chakra-ui/react"
import { ReactNode } from "react"
import {
  FieldError,
  FieldErrors,
  FieldValues,
  useFormContext
} from "react-hook-form"

interface CustomInputProps {
  name: string
  label: string
  type?: string
  disabled?: boolean
  required?: boolean
  InputLeftChildren?: ReactNode
  InputRightChildren?: ReactNode
  placeholder?: string
}

const formValidation = (errors: FieldErrors<FieldValues>, errorKey: string) => {
  return errors[errorKey] ? (errors[errorKey] as FieldError)?.message : null
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label = "",
  type = "text",
  disabled = false,
  required = false,
  InputLeftChildren,
  InputRightChildren,
  placeholder
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" hidden={!InputLeftChildren}>
          {InputLeftChildren}
        </InputLeftElement>
        <Input
          id={name}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          errorBorderColor="crimson"
          isInvalid={errors && !!errors[name]}
          {...register(name)}
          w="full"
        />
        <InputRightElement hidden={!InputRightChildren}>
          {InputRightChildren}
        </InputRightElement>
      </InputGroup>
      {errors && (
        <Text p={1} color="crimson" fontSize="xs">
          {formValidation(errors, name)}
        </Text>
      )}
    </FormControl>
  )
}

export default CustomInput
