import { Modal } from "@mui/material";
import React from "react";
import { ModalBox, SubmitButton } from "./styles";

export const ModalComponent = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SubmitButton type="button" variant="contained" onClick={handleOpen}>
        {props.buttonName}
      </SubmitButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>{props.children}</ModalBox>
      </Modal>
    </div>
  );
};
