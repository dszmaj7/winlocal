import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Loading from "../components/Loading";
import { useGetCommentsQuery } from "../redux/api/commentsApi";
import { useGetPostQuery } from "../redux/api/postApi";
import { useAppSelector } from "../redux/store";
import { Comment } from "../redux/types/comment.type";
import { AbsoluteIconButton } from "../global-styles/AbsoluteIconButton";
import { Button } from "../global-styles/Button";
import { Container } from "../global-styles/Container";
import { Username } from "../global-styles/Username";
import { Wrapper } from "../global-styles/Wrapper";
import { useGetUserQuery } from "../redux/api/usersApi";

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
  const { id, post_id } = useParams();
  const userState = useAppSelector((state) => state.userSlice.user);

  const [showComments, setShowComments] = useState<boolean>(false);

  const navigate = useNavigate();
  const { data: post, isFetching: postFetching, isLoading: postLoading } = useGetPostQuery(parseInt(post_id!));
  const { data: comments, isFetching: commentsFetching, isLoading: commentsLoading } = useGetCommentsQuery(parseInt(post_id!));
  
  useGetUserQuery(parseInt(id!), {skip: !!userState});

  const iconWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {(postFetching || postLoading || commentsFetching || commentsLoading) && <Loading />}

      <Container>
        <IconWrapper ref={iconWrapperRef}>
          <AbsoluteIconButton icon={faReply} $left $containerWidth={iconWrapperRef.current?.clientWidth} onClick={() => navigate(-1)} />
        </IconWrapper>
        <Wrapper>
          <Username>{userState?.name}</Username>
          <PostWrapper>
            <h2>{post?.title}</h2>
            <div>{post?.body}</div>
          </PostWrapper>
          {post && (
            <ButtonWrapper>
              <Button onClick={() => setShowComments(!showComments)}>Show comments</Button>
            </ButtonWrapper>
          )}
          {showComments && (
            <CommentsWrapper>
              {comments?.map((comment: Comment) => (
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
