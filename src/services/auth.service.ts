import { User } from "@/models/user.model"

const testUser: User = {
  id: 1,
  username: "Sunlit",
  email: "ericdnieves16@gmail.com",
  roles: [1],
  isActive: true
}

export const login = async () => {
  return testUser
}
