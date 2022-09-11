import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "../../styled/Button";
import { ModalBackgroud, ModalBody, ModalContainer, ModalFooter, ModalHeader, ModalWrapper } from "../../styled/modal";

import ReactPortal from "./ReactPortal";

interface ModalProps {
  show: boolean;
  children: React.ReactNode;
  handleClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg";
  saveBtn?: boolean;
  onSave?: () => void;
  deleteBtn?: boolean;
  onDelete?: () => void;
  wrapper?: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  children,
  handleClose,
  title,
  size = "md",
  saveBtn,
  deleteBtn,
  onSave,
  onDelete,
  wrapper = "react-portal-modal-container",
}) => {
  const [shake, setShake] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
   shake && setTimeout(() => setShake(false), 800);
  }, [shake]);

  if (!show) return null;
  return (
    <ReactPortal wrapperId={wrapper}>
      <ModalContainer>
        <ModalWrapper ref={modalRef} $size={size} shake={shake}>
          <ModalHeader>
            <h4>{title}</h4>
          </ModalHeader>

          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            {deleteBtn && (
              <Button $delete onClick={onDelete}>
                Remove
              </Button>
            )}
            {saveBtn && (
              <Button $accept onClick={onSave}>
                Add
              </Button>
            )}
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalWrapper>
      </ModalContainer>
      <ModalBackgroud
        onClick={() => {
          setShake(!shake);
        }}
      />
    </ReactPortal>
  );
};

export default Modal;
