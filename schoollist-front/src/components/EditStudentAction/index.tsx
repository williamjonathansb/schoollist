import { EditStudentForm } from "../EditStudentForm";
import { ModalComponent } from "../Modal";
import EditIcon from "@mui/icons-material/Edit";
import { GridRowId } from "@mui/x-data-grid";

interface EditStudentActionProps {
  id: GridRowId;
}

export const EditStudentAction = ({ id }: EditStudentActionProps) => {
  return (
    <ModalComponent buttonIcon={<EditIcon />} buttonIconLabel="edit">
      <EditStudentForm id={id} />
    </ModalComponent>
  );
};
