import { useParams } from "react-router";
import { ModalProps } from "../../hooks/useModal";
import PostForm from "../PostForm";
import Modal from "../utils/Modal";

interface Props {
  modalProps: ModalProps;
}

const AddPost: React.FC<Props> = ({ modalProps }) => {

  const { id } = useParams();
  return (
    <Modal
      show={modalProps.modalShow}
      handleClose={() => modalProps.setModalShow(false)}
      saveBtn
      title="Add new post"
      size="sm"
      onSave={() => modalProps.ref.current.click()}
    >
      <PostForm userId={parseInt(id!)} formRef={modalProps.ref} closeModal={() => modalProps.setModalShow(false)} />
    </Modal>
  );
};

export default AddPost;