import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        action="#"
        className="max-w-[600px] w-[96%] p-3 border border-neutral-400"
      >
        <h1 className="text-center text-3xl bg-gradient-to-tr from-orange-500 to-orange-800 text-white font-semibold">
          SIGN UP
        </h1>
        <div className="my-[0.5rem]">
          <p>FirstName</p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter firstname"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
          />
        </div>
        <div className="my-[0.5rem]">
          <p>LastName</p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter lastname"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
          />
        </div>
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
            placeholder="Enter your password"
            className="p-[8px] w-full h-[40px] outline-none border border-neutral-300"
          />
        </div>
        <button
          type="submit"
          className="w-full h-[40px] bg-blue-500 text-white"
        >
          SIGN UP
        </button>

        <p>
          <Link to="/" className="text-blue-600">
            Have an Account?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
