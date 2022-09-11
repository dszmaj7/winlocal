import { useAddPostMutation } from "../../redux/api/postApi";
import { FormGroup } from "./styles/FormGroup";
import { FormWrapper } from "./styles/FormWrapper";
import { Input } from "../../global-styles/Input";
import { Textarea } from "../../global-styles/Textarea";

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
        <Input type="text" id="post-title" name="postTitle" required />
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
