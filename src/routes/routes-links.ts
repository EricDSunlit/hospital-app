import {
  HiChartBar,
  HiOutlineBuildingOffice2,
  HiOutlineDocumentPlus,
  HiOutlineBookOpen,
  HiOutlineCalendarDays,
  HiOutlineUserGroup,
  HiUserCircle,
  HiOutlinePuzzlePiece,
  HiOutlineKey
} from "react-icons/hi2"

import { PRIVATE_ROUTES } from "./routes"
import { RouteLink } from "@/models/route-link.model"

export const ROUTES_LINKS: RouteLink[] = [
  {
    description: "Dashboard",
    to: PRIVATE_ROUTES.DASHBOARD,
    icon: HiChartBar
  },
  {
    description: "Instituciones medicas",
    to: "instituciones",
    icon: HiOutlineBuildingOffice2
  },
  {
    description: "Historiales clínicos",
    to: "formularios",
    icon: HiOutlineDocumentPlus
  },
  {
    description: "Recetas médicas",
    to: "recetas",
    icon: HiOutlineBookOpen
  },
  {
    description: "Citas medicas",
    to: "citas",
    icon: HiOutlineCalendarDays
  },
  {
    description: "Personas",
    to: "personal",
    icon: HiOutlineUserGroup,
    subLinks: [
      {
        description: "Usuarios",
        to: "personal/usuarios",
        icon: HiUserCircle
      },
      {
        description: "Roles",
        to: PRIVATE_ROUTES.DASHBOARD,
        icon: HiOutlinePuzzlePiece
      },
      {
        description: "Permisos",
        to: PRIVATE_ROUTES.DASHBOARD,
        icon: HiOutlineKey
      }
    ]
  }
]
