
import { useEffect } from "react";
import { Link } from "react-router-dom"; 

import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
const UserManagement = () => {



  const navigate = useNavigate()
 const isAuthenticated =!! localStorage.getItem('token');
 console.log(isAuthenticated)
  const dynamicUsers = JSON.parse(localStorage.getItem("users")) || []
useEffect (()=>{
  if(!isAuthenticated){
    localStorage.getItem('/')
    navigate('/')
  }
},[isAuthenticated])

const handleLogout= ()=>{
  localStorage.removeItem('token');
  navigate('/')
}

const navItems=[
  'HOME',
  'USERS',
  'ALUMNI',
  'ABOUT',
]

  return (
    <div className="flex flex-col h-screen w-full  items-center">
      <Header name="Mercy cherotich" navItems={navItems}/>
      <div className="w-full px-[2%]">
        <table className="w-[100%] mx-auto border border-neutral-300">
          <thead className="bg-black text-white">
            <tr>
              <td className="py-[0.5rem] px-[1rem]">First Name</td>
              <td className="py-[0.5rem] px-[1rem]">Last Name</td>
              <td className="py-[0.5rem] px-[1rem]">Email</td>
              <td className="py-[0.5rem] px-[1rem]">Edit</td>
              <td className="py-[0.5rem] px-[1rem]">Delete</td>
            </tr>
          </thead>
          <tbody>
            {dynamicUsers?.map((user, index) => (
              <tr className="border-b border-neutral-300" key={index}>
                <td className="py-[0.5rem] px-[1rem]">{user.FName}</td>
                <td className="py-[0.5rem] px-[1rem]">{user.LName}</td>
                <td className="py-[0.5rem] px-[1rem]">{user.email}</td>
                <td className="py-[0.5rem] px-[1rem]">
                  <button className="bg-green-500 text-white px-[1rem] py-[0.5rem]">
                    Edit
                  </button>
                </td>
                <td className="py-[0.5rem] px-[1rem]">
                  <button className="bg-red-500 text-white px-[1rem] py-[0.5rem]">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="#" className="text-blue-500" onClick={handleLogout}>Logout?</Link>
      </div>
    </div>
  );
};

export default UserManagement;