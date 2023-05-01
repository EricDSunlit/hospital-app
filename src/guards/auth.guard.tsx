import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

import { AppStore } from "@/redux/store"
import { PUBLIC_ROUTES } from "@/routes"

const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user)
  return userState.username ? (
    <Outlet />
  ) : (
    <Navigate replace to={PUBLIC_ROUTES.LOGIN} />
  )
}

export default AuthGuard
