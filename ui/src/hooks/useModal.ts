import React, { Dispatch, MutableRefObject, useRef, useState } from "react";

export type ModalProps = {
    modalShow: boolean;
    setModalShow: Dispatch<React.SetStateAction<boolean>>;
    ref: MutableRefObject<any>;
}

export const useModal = (initialShow: boolean = false): ModalProps => {
  const ref = useRef(null);
  const [modalShow, setModalShow] = useState<boolean>(initialShow);

  return { modalShow, setModalShow, ref };
};
