import { ModalProps } from "./hooks/useModal";
import { useDeletePostMutation } from "../../redux/api/postApi";
import Modal from "./Modal";

interface Props {
  modalProps: ModalProps;
  postId: number;
}

const DeletePost: React.FC<Props> = ({ modalProps, postId }) => {
  const [ deletePost ] = useDeletePostMutation();
  return (
    <Modal
      show={modalProps.modalShow}
      handleClose={() => modalProps.setModalShow(false)}
      title="Removing post"
      size="sm"
      deleteBtn
      onDelete={() => deletePost(postId)}
    >
      <span>Are you sure you want to remove this post?</span>
    </Modal>
  );
};

export default DeletePost;