export interface AuthUser {
  username: string
  password: string
}

export const defaultAuthUser: AuthUser = {
  username: "",
  password: ""
}
