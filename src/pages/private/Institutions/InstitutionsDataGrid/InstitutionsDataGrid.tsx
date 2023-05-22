import { useMemo } from "react"

import { TableColumn } from "react-data-table-component"

import { CustomDataGrid } from "@/components/CustomDataGrid"
import { HStack, IconButton } from "@chakra-ui/react"
import { HiInformationCircle, HiPencil, HiTrash } from "react-icons/hi2"

// export type InstitutionsDataGridProps = {}

interface Intitution {
  id?: number
  name: string
  address: string
  phone: number
}

const InstitutionsDataGrid: React.FC = () => {
  const InstitutionsColumns: TableColumn<Intitution>[] = useMemo(
    () => [
      {
        name: "Nombre",
        selector: (row) => row.name,
        grow: 2
      },
      {
        name: "Ubicación",
        selector: (row) => row.address,
        grow: 2
      },
      {
        name: "Numero de telefono",
        selector: (row) => row.address,
        grow: 2
      },
      // TODO: SEPARATE THIS IN A COMPONENT
      {
        name: "",
        cell: () => (
          <HStack spacing="10px">
            <IconButton
              aria-label="Show details"
              variant="outline"
              fontSize="20px"
              icon={<HiInformationCircle />}
            />
            <IconButton
              aria-label="Edit row"
              variant="outline"
              // color="blue.300"
              icon={<HiPencil />}
            />
            <IconButton
              aria-label="Delete row"
              variant="outline"
              color="red.300"
              icon={<HiTrash />}
            />
          </HStack>
        ),
        ignoreRowClick: true
      }
    ],
    []
  )

  //   Prueba
  const institutionsData: Intitution[] = [
    {
      id: 1,
      name: "Hospital Nieves",
      address: "Calle Hermanas Mirabal No. 11B",
      phone: 8092368882
    },
    {
      id: 2,
      name: "Hospital Bather",
      address: "Residencial Camila Henriquez 1A",
      phone: 8092310221
    },
    {
      id: 3,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 4,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 5,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 6,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 7,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 8,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 9,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 10,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 11,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 12,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 13,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 14,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 15,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 16,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 17,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    },
    {
      id: 18,
      name: "Hospital Nieves Bather",
      address: "Calle nose No. 3B, Piantini",
      phone: 8098765786
    }
  ]
  //   Prueba

  return (
    <>
      <CustomDataGrid
        title="Instituciones"
        addText="nueva institución"
        columns={InstitutionsColumns}
        data={institutionsData}
      />
    </>
  )
}

export default InstitutionsDataGrid
