import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Loading from "../components/utils/Loading";
import { useGetCommentsQuery } from "../redux/api/commentsApi";
import { useGetPostQuery } from "../redux/api/postApi";
import { useAppSelector } from "../redux/store";
import { Comment } from "../redux/types/comment.type";
import { AbsoluteIconButton } from "../styled/AbsoluteIconButton";
import { Button } from "../styled/Button";
import { Container } from "../styled/Container";
import { Username } from "../styled/Username";
import { Wrapper } from "../styled/Wrapper";

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 30px;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 10px;
  background-color: #e2e2e2;
  border-radius: 10px;

  & > div:nth-child(1) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const BreakLine = styled.hr`
  width: 100%;
`;

const PostDetails: React.FC = () => {
  const postState = useAppSelector((state) => state.postSlice.post);
  const userState = useAppSelector((state) => state.userSlice.user);

  const [showComments, setShowComments] = useState<boolean>(false);

  const navigate = useNavigate();
  const post = useGetPostQuery(postState.id);
  const comments = useGetCommentsQuery(postState.id);

  const iconWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {(post.isFetching || post.isLoading || comments.isLoading || comments.isFetching) && <Loading />}

      <Container>
        <IconWrapper ref={iconWrapperRef}>
          <AbsoluteIconButton icon={faReply} $left $containerWidth={iconWrapperRef.current?.clientWidth} onClick={() => navigate(-1)} />
        </IconWrapper>
        <Wrapper>
          <Username>{userState.name}</Username>
          <PostWrapper>
            <h2>{post.data?.title}</h2>
            <div>{post.data?.body}</div>
          </PostWrapper>
          {post.data && (
            <ButtonWrapper>
              <Button onClick={() => setShowComments(!showComments)}>Show comments</Button>
            </ButtonWrapper>
          )}
          {showComments && (
            <CommentsWrapper>
              {comments.data?.map((comment: Comment) => (
                <>
                  <CommentContainer>
                    <div>
                      <span>{comment.name}</span>
                      <span>{comment.email}</span>
                    </div>
                    <div>{comment.body}</div>
                  </CommentContainer>
                  <BreakLine />
                </>
              ))}
            </CommentsWrapper>
          )}
        </Wrapper>
        <div></div>
      </Container>
    </>
  );
};

export default PostDetails;
