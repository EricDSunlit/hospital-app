import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import DataTable, { TableColumn } from "react-data-table-component"

interface CustomDataGridProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  title: string
  addText: string
}

const CustomDataGrid = <T extends object>({
  columns,
  data,
  title,
  addText
}: CustomDataGridProps<T>) => {
  return (
    <>
      <Box
        sx={{
          maxHeight: 650,
          width: "100%"
        }}
      >
        <Box px={3}>
          <Flex justifyContent="space-between">
            <Heading as="h3" size="md">
              {title}
            </Heading>
            <Button>+ {addText}</Button>
          </Flex>

          {/* TODO: Desing properly the search and filter component */}
          {/* <Box>
            <Text>Search</Text>
          </Box>

          <Box>
            <Text>Filters</Text>
          </Box> */}
        </Box>
        <DataTable
          // title={title}
          columns={columns}
          data={data}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[5, 10]}
        />
      </Box>
    </>
  )
}

export default CustomDataGrid
