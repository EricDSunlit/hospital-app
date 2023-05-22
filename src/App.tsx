import { Suspense, lazy } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Provider } from "react-redux"

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound"
import store from "./redux/store"
import AuthGuard from "./guards/auth.guard"

const Login = lazy(() => import("./pages/public/Login/Login"))
const Dashboard = lazy(() => import("./pages/private/Dashboard/Dashboard"))
const Institutions = lazy(
  () => import("./pages/private/Institutions/Institutions")
)

function App() {
  return (
    <main>
      {/*TODO: CREATE LOADING PAGE */}
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path={PUBLIC_ROUTES.HOME}
                element={<Navigate to={PRIVATE_ROUTES.DASHBOARD} />}
              />
              <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={PRIVATE_ROUTES.DASHBOARD}
                  element={<Dashboard />}
                />
                <Route
                  path={`${PRIVATE_ROUTES.INSTITUTIONS}/*`}
                  element={<Institutions />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </main>
  )
}

export default App
