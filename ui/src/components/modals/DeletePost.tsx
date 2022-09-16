import { ModalProps } from './hooks/useModal';
import { useDeletePostMutation } from '../../redux/api/postApi';
import Modal from './Modal';
import Loading from '../Loading';
import { Post } from '../../redux/types/post.type';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setPosts } from '../../redux/features/postSlice';

interface Props {
    modalProps: ModalProps;
    post: Post;
}

const DeletePost: React.FC<Props> = ({ modalProps, post }) => {
    const [deletePost, { isLoading }] = useDeletePostMutation();
    const dispatch = useAppDispatch();
    const postsState = useAppSelector(state => state.postSlice.posts);
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
                    deletePost(post.id)
                        .unwrap()
                        .then(() => {
                            dispatch(
                                setPosts(
                                    postsState.filter(
                                        (element: Post) => element.id !== post.id && element.title !== post.title,
                                    ),
                                ),
                            );
                            modalProps.setModalShow(false);
                        })
                        .catch(err => console.log('error ', err))
                }
            >
                <span>Are you sure you want to remove this post?</span>
            </Modal>
        </>
    );
};

export default DeletePost;
