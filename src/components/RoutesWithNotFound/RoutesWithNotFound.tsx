import { ReactNode } from "react"
import { Route, Routes } from "react-router-dom"
import { PUBLIC_ROUTES } from "../../routes/routes"

interface RoutesWithNotFoundProps {
  children: ReactNode
}

const RoutesWithNotFound: React.FC<RoutesWithNotFoundProps> = ({
  children
}) => {
  return (
    <Routes>
      {children}
      {/* TODO: Create not fount page component */}
      <Route path={PUBLIC_ROUTES.NOT_FOUND} element={<>404, Not Found</>} />
    </Routes>
  )
}

export default RoutesWithNotFound
