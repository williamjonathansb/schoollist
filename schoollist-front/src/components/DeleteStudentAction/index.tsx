import { useMutation } from "@apollo/client";
import {
  deleteStudentQuery,
  getStudentsQuery,
  IStudent,
} from "../../services/student";
import { GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { client } from "../../services/apolloClient";
interface DeleteStudentActionProps {
  id: GridRowId;
}

export const DeleteStudentAction = ({ id }: DeleteStudentActionProps) => {
  const [deleteStudent] = useMutation(deleteStudentQuery, {
    update(cache, { data }) {
      const resultData: { students: IStudent[] } | null = cache.readQuery({
        query: getStudentsQuery,
      });

      if (resultData?.students) {
        const dataWithoutStudentRemoved = resultData.students.filter((s) => {
          if (s.id !== id) return s;
        });
        cache.writeQuery({
          query: getStudentsQuery,
          data: {
            students: [...dataWithoutStudentRemoved],
          },
        });
      }
    },
  });

  const handleDeleteStudent = async () => {
    await deleteStudent({
      variables: {
        id: id,
      },
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
