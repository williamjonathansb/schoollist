import { useMutation } from "@apollo/client";
import { deleteStudentQuery, getStudentsQuery } from "../../services/student";
import { GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

export const DeleteStudentAction = ({ id }: any) => {
  const [deleteStudent] = useMutation(deleteStudentQuery);

  const handleDeleteStudent = async () => {
    await deleteStudent({
      variables: {
        id: id,
      },
      refetchQueries: [getStudentsQuery],
    });
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
