import { ModalProps } from "./hooks/useModal";
import { useDeletePostMutation } from "../../redux/api/postApi";
import Modal from "./Modal";
import Loading from "../Loading";

interface Props {
  modalProps: ModalProps;
  postId: number;
}

const DeletePost: React.FC<Props> = ({ modalProps, postId }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  return (
    <>
      {isLoading && <Loading />}
      <Modal
        show={modalProps.modalShow}
        handleClose={() => modalProps.setModalShow(false)}
        title="Removing post"
        size="sm"
        deleteBtn
        onDelete={() =>
          deletePost(postId)
            .unwrap()
            .then(() => modalProps.setModalShow(false))
            .catch((err) => console.log("error ", err))
        }
      >
        <span>Are you sure you want to remove this post?</span>
      </Modal>
    </>
  );
};

export default DeletePost;
