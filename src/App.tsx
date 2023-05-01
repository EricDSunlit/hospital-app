import { Suspense, lazy } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Provider } from "react-redux"

import { PUBLIC_ROUTES } from "./routes"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound"
import store from "./redux/store"

const Login = lazy(() => import("./pages/public/Login/Login"))

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
                element={<Navigate to={PUBLIC_ROUTES.LOGIN} />}
              />
              {/* TODO: CREATE LOGIN PAGE */}
              <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </main>
  )
}

export default App
