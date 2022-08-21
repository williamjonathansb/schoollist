import { useQuery } from "@apollo/client";
import { GridColumns } from "@mui/x-data-grid";
import { IStudent } from "../../pages/SchoolListPage";
import { getStudentsQuery } from "../../services/student";
import { DataGridStyled, SchoolListContainer } from "./styles";
import { DeleteStudentAction } from "../DeleteStudentAction";
import { EditStudentAction } from "../EditStudentAction";

export const SchoolList = ({ cpf, name, email }: IStudent) => {
  const columns: GridColumns = [
    {
      field: "cpf",
      headerName: "CPF",
      headerClassName: "datagrid-header",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
      minWidth: 150,
    },
    {
      field: "name",
      headerName: "Nome",
      headerClassName: "datagrid-header",
      headerAlign: "center",
      align: "center",
      flex: 0.3,
      minWidth: 100,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "datagrid-header",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
      minWidth: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Ações",
      headerClassName: "datagrid-header",
      width: 100,
      getActions: ({ id }) => {
        return [<EditStudentAction id={id} />, <DeleteStudentAction id={id} />];
      },
    },
  ];

  const { data, loading, error } = useQuery(getStudentsQuery, {
    variables: {
      cpf,
      name,
      email,
    },
  });

  return (
    <SchoolListContainer>
      <DataGridStyled
        rows={loading || error ? [] : data.students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu={true}
        disableColumnSelector={true}
        disableSelectionOnClick={true}
        disableExtendRowFullWidth={true}
        loading={loading}
        error={error}
      />
    </SchoolListContainer>
  );
};
