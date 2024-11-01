
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "ACCESS GRANTED",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/users");
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        action="#"
        onSubmit={handleSubmit}
        className="max-w-[600px]  w-[96%] p-3 border border-neutral-400"
      >
        <h1 className="text-center text-3xl font-semibold bg-gradient-to-tr from-orange-500 to-orange-800  text-white">
          LOGIN
        </h1>
        <div className="my-[0.5rem]">
          <p>Email</p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter email"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
          />
        </div>
        <div className="my-[0.5rem]">
          <p>Password</p>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter email"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
          />
        </div>

        <p>
          <Link className="text-blue-600 ">Forget password</Link>
        </p>

        <button
          type="submit"
          className="w-full h-[40px] bg-blue-500 text-white"
        >
          LOGIN
        </button>

        <p>
          <Link to="/signup" className="text-blue-600">
            Don't have an account?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;