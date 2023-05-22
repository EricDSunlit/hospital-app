import { RoutesWithNotFound } from "@/components/RoutesWithNotFound"
import React, { lazy } from "react"
import { Route } from "react-router-dom"

const InstitutionsDataGrid = lazy(
  () => import("./InstitutionsDataGrid/InstitutionsDataGrid")
)

// export type InstitutionsProps = {}

const Institutions: React.FC = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<InstitutionsDataGrid />} />
    </RoutesWithNotFound>
  )
}

export default Institutions
