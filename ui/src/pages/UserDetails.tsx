import { faPlus, faReply, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AddPost from "../components/modals/AddPost";
import DeletePost from "../components/modals/DeletePost";
import Loading from "../components/utils/Loading";
import { useModal } from "../hooks/useModal";
import { useGetUserPostsQuery } from "../redux/api/usersApi";
import { setPost } from "../redux/features/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Post } from "../redux/types/post.type";
import { AbsoluteIconButton } from "../styled/AbsoluteIconButton";
import { Container } from "../styled/Container";
import { Username } from "../styled/Username";
import { Wrapper } from "../styled/Wrapper";

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const PostsListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PostWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const RemoveIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 1.25em;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: #e2e2e2;
  }
`;

const UserDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.userSlice.user);
  const postState = useAppSelector((state) => state.postSlice.post);
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetUserPostsQuery(userState.id);

  const newPost = useModal();
  const deletePost = useModal();

  return (
    <>
      {(isFetching || isLoading) && <Loading />}
      <Container>
        <IconWrapper>
          <AbsoluteIconButton icon={faReply} $left={true} onClick={() => navigate(-1)} />
        </IconWrapper>

        <Wrapper>
          <Username>{userState.name}</Username>

          <PostsListWrapper>
            <PostsList>
              {data?.map((post: Post) => (
                <PostWrapper onClick={() => dispatch(setPost(post))}>
                  <IconWrapper>
                    <RemoveIcon icon={faTrash} onClick={() => deletePost.setModalShow(true)} />
                  </IconWrapper>

                  <ListItem>
                    <div onClick={() => navigate(`${post.id}`)}>{post.title.substring(0, 50).toUpperCase()}</div>
                  </ListItem>
                </PostWrapper>
              ))}
            </PostsList>
          </PostsListWrapper>
        </Wrapper>
        <IconWrapper>
          <AbsoluteIconButton
            icon={faPlus}
            $right
            onClick={() => {
              newPost.setModalShow(true);
            }}
          />
        </IconWrapper>
      </Container>

      <AddPost modalProps={newPost} />
      <DeletePost modalProps={deletePost} postId={postState.id} />
    </>
  );
};

export default UserDetails;
