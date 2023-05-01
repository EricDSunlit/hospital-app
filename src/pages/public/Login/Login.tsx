import { useEffect, useState } from "react"
import {
  Box,
  Center,
  Flex,
  IconButton,
  Heading,
  Stack,
  Text,
  useBreakpointValue
} from "@chakra-ui/react"
import { AtSignIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { loginFormSchema } from "./schemas/login-form-schema"
import { AuthUser, defaultAuthUser } from "@/models/auth.model"
import { CustomInput } from "@/components/CustomInput"
import CustomButton from "@/components/CustomButton/CustomButton"
import { login } from "@/services/auth.service"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { USER_KEY, createUser, resetUser } from "@/redux/states/user.state"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes"
import { clearLocalStorage } from "@/utils/local-storage.util"

const Login: React.FC = () => {
  const size = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg"
  })
  const [show, setShow] = useState<boolean>(false)
  const [formError, setFormError] = useState<boolean>(false)
  const handlePasswordClick = () => setShow((prevState) => !prevState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const methods = useForm({
    defaultValues: defaultAuthUser,
    mode: "onChange",
    resolver: yupResolver(loginFormSchema)
  })

  const {
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
    reset
  } = methods

  const usernameWatch = watch("username")
  const passwordWatch = watch("password")

  const onSubmit = async (credentials: AuthUser) => {
    try {
      const result = await login()
      dispatch(createUser(result))
      if (result.username === credentials.username) {
        navigate(`/${PRIVATE_ROUTES.DASHBOARD}`, { replace: true })
        reset()
      } else {
        setFormError(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    clearLocalStorage(USER_KEY)
    dispatch(resetUser())
    navigate(`/${PUBLIC_ROUTES.LOGIN}`, { replace: true })
  }, [dispatch, navigate])

  return (
    <Flex w="100vw" h="100vh">
      <Box
        flex="1"
        borderRight="1px"
        borderColor="gray.400"
        hidden={size === "sm" || size === "md"}
      >
        <Center>Image / Vetor / IDK</Center>
      </Box>
      <Box display="flex" flex="1" justifyContent="center" alignItems="center">
        <Box w="60%" h="60%" p="5">
          <Center>
            <Heading as="h3" size="lg">
              Inicio de Sesión
            </Heading>
          </Center>
          <Center>
            <Text color="gray.500">
              Bienvenido ... pendiente de escribir esta frase
            </Text>
          </Center>
          <Box marginTop="14">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={30}>
                  <CustomInput
                    name="username"
                    label="Usuario"
                    placeholder="Escribe tu nombre de usuario"
                    InputLeftChildren={<AtSignIcon color="gray.400" />}
                  />

                  <CustomInput
                    name="password"
                    label="Contraseña"
                    type={show ? "text" : "password"}
                    placeholder="Escribe tu contraseña"
                    InputLeftChildren={<LockIcon color="gray.400" />}
                    InputRightChildren={
                      <IconButton
                        aria-label="show and hide password button"
                        icon={show ? <ViewIcon /> : <ViewOffIcon />}
                        size="sm"
                        bg="whiteAlpha.100"
                        onClick={handlePasswordClick}
                      />
                    }
                  />
                </Stack>
                <Text
                  textAlign="end"
                  fontSize="xs"
                  p={1}
                  color="blue.300"
                  fontWeight="bold"
                >
                  Recuperar contraseña
                </Text>
                <Text
                  p={1}
                  color="crimson"
                  fontSize="xs"
                  marginTop={2}
                  marginBottom={-8}
                  hidden={!formError}
                >
                  No fue posible ingresar al sistema, por favor verifique sus
                  credenciales e intente nuevamente.
                </Text>
                <CustomButton type="submit" isDirty={isDirty} isValid={isValid}>
                  Iniciar sesión
                </CustomButton>
                <Center>
                  <Text
                    fontSize="sm"
                    color="blue.300"
                    fontWeight="bold"
                    marginTop={2}
                  >
                    ¿No tienes cuenta? Registrate
                  </Text>
                </Center>
              </form>
            </FormProvider>
            <Text>Username: {usernameWatch}</Text>
            <Text>Password: {passwordWatch}</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Login
