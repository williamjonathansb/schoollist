import { Modal } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import React, { ReactElement } from "react";
import { ModalBox, SubmitButton } from "./styles";

interface ModalComponentProps {
  children: React.ReactNode;
  buttonIcon?: ReactElement<any>;
  buttonIconLabel?: string;
  buttonName?: string;
}

export const ModalComponent = ({
  children,
  buttonIcon,
  buttonIconLabel,
  buttonName,
}: ModalComponentProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {buttonIcon ? (
        <GridActionsCellItem
          icon={buttonIcon}
          label={buttonIconLabel ? buttonIconLabel : ""}
          className="textPrimary"
          onClick={handleOpen}
          color="inherit"
        />
      ) : (
        <SubmitButton type="button" variant="contained" onClick={handleOpen}>
          {buttonName}
        </SubmitButton>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>{children}</ModalBox>
      </Modal>
    </div>
  );
};
