export interface User {
  id: number
  username: string
  email: string
  roles: number[]
  isActive: true
}

export const defaultUser: User = {
  id: 0,
  username: "",
  email: "",
  roles: [],
  isActive: true
}
