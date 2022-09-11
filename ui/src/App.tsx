import { Route, Routes } from "react-router-dom";
import PostDetails from "./pages/PostDetails";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<UserDetails />} />
        <Route path="/:id/:post_id" element={<PostDetails />} />
      </Routes>
  );
};

export default App;
