import { EditStudentForm } from "../EditStudentForm";
import { ModalComponent } from "../Modal";
import EditIcon from "@mui/icons-material/Edit";

export const EditStudentAction = ({ id }: any) => {
  return (
    <ModalComponent buttonIcon={<EditIcon />} buttonIconLabel="edit">
      <EditStudentForm id={id} />
    </ModalComponent>
  );
};
