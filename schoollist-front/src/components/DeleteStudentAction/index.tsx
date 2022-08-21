import { useMutation } from "@apollo/client";
import { deleteStudentQuery, getStudentsQuery } from "../../services/student";
import { GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { client } from "../../ApolloClient/client";

interface DeleteStudentActionProps {
  id: GridRowId;
}

export const DeleteStudentAction = ({ id }: DeleteStudentActionProps) => {
  const [deleteStudent] = useMutation(deleteStudentQuery);

  const handleDeleteStudent = async () => {
    await deleteStudent({
      variables: {
        id: id,
      },
      refetchQueries: [getStudentsQuery],
    });

    client.resetStore();
  };

  return (
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Delete"
      className="textPrimary"
      onClick={() => handleDeleteStudent()}
      color="inherit"
    />
  );
};
