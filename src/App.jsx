import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/Signup";
import UserManagement from "./pages/UserManagement";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<UserManagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
