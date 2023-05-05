import { IconType } from "react-icons"

export interface RouteLink {
  description: string
  to: string
  icon: IconType
  subLinks?: RouteLink[]
}
