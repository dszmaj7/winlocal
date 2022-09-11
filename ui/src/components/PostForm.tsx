import { useAddPostMutation } from "../redux/api/postApi";
import { Post } from "../redux/types/post.type";
import { FormGroup } from "../styled/form/FormGroup";
import { FormWrapper } from "../styled/form/FormWrapper";
import { Input } from "../styled/Input";
import { Textarea } from "../styled/Textarea";

interface Props {
  userId: number;
  formRef: React.MutableRefObject<HTMLInputElement>;
  closeModal: () => void;
}

const PostForm: React.FC<Props> = ({ userId, formRef, closeModal }) => {
  const [addPost] = useAddPostMutation();
  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();

        addPost({
          userId: userId,
          title: e.currentTarget.postTitle.value,
          body: e.currentTarget.postContent.value,
        })
          .unwrap()
          .then(() => closeModal())
          .catch((err) => console.log("error ", err));
      }}
    >
      <FormGroup>
        <label htmlFor="post-title">Post title:</label>
        <Input type="text" id="postTitle" name="post-title" required />
      </FormGroup>

      <FormGroup>
        <label htmlFor="post-content">Content:</label>
        <Textarea id="post-content" name="postContent" minHeight="300px" required />
      </FormGroup>
      <input type="submit" hidden ref={formRef} />
    </FormWrapper>
  );
};

export default PostForm;
