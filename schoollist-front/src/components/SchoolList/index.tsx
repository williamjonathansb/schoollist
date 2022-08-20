import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { getStudentsQuery } from "../../services/student";
import { DataGridStyled, SchoolListContainer } from "./styles";

const columns: GridColDef[] = [
  {
    field: "cpf",
    headerName: "CPF",
    headerClassName: "datagrid-header",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: "name",
    headerName: "Nome",
    headerClassName: "datagrid-header",
    headerAlign: "center",
    align: "center",
    flex: 0.3,
    minWidth: 50,
  },
  {
    field: "email",
    headerName: "Email",
    headerClassName: "datagrid-header",
    headerAlign: "center",
    align: "center",
    flex: 0.5,
    minWidth: 50,
  },
];

export const SchoolList = () => {
  const { data, loading, error } = useQuery(getStudentsQuery);

  if (error) return <div>error</div>;

  return (
    <SchoolListContainer>
      <Box
        sx={{
          height: 400,
          width: "60%",
          maxWidth: "1000px",
        }}
      >
        <DataGridStyled
          rows={!loading ? data.students : []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnMenu={true}
          disableColumnSelector={true}
          disableSelectionOnClick={true}
          disableExtendRowFullWidth={true}
          loading={loading}
        />
      </Box>
    </SchoolListContainer>
  );
};
