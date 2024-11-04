import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserManagement = () => {
  const navigate = useNavigate();

  const users = [
    {
      fname: "Geophrey",
      secondName: "Kariuki",
      email: "kariuki@gmail.com",
    },
    {
      fname: "Ziporrah",
      secondName: "Gershom",
      email: "abishai@gmail.com",
    },
    
  ];

  const [dynamicUsers, setDynamicUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (index) => {
    const updatedUsers = dynamicUsers.filter((_, i) => i !== index);
    setDynamicUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleEdit = (index) => {
    const userToEdit = dynamicUsers[index];
    const updatedFName = prompt("Edit First Name:", userToEdit.FName);
    const updatedLName = prompt("Edit Last Name:", userToEdit.LName);
    const updatedEmail = prompt("Edit Email:", userToEdit.email);

    if (updatedFName && updatedLName && updatedEmail) {
      const updatedUsers = dynamicUsers.map((user, i) =>
        i === index
          ? { ...user, FName: updatedFName, LName: updatedLName, email: updatedEmail }
          : user
      );

      setDynamicUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(dynamicUsers));
  }, [dynamicUsers]);

  const handleLogout = () => {
    localStorage.removeItem("users");
    navigate("/signup");
  };

  
  const filteredUsers = dynamicUsers.filter((user) =>
    user.FName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.LName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen w-full justify-between">
      <div className="w-full px-[2%]">
        
        
        <div className="mb-4 fixed w-[75.5rem]">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-full"
          />
        </div>
          <div className="flex-grow overflow-auto">
        <table className="w-[100%] mx-auto border border-neutral-300 max-h-[70vh] mt-[3rem] ">
          <thead className="bg-black text-white fixed w-[75.5rem] mb-[2rem]">
            <tr>
              <td className="py-[0.5rem] px-[1rem]">First Name</td>
              <td className="py-[0.5rem] px-[1rem]">Last Name</td>
              <td className="py-[0.5rem] px-[1rem]">Email</td>
              <td className="py-[0.5rem] px-[1rem]">Edit</td>
              <td className="py-[0.5rem] px-[1rem]">Delete</td>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr className="border-b border-neutral-300" key={index}>
                  <td className="py-[0.5rem] px-[1rem]">{user.FName}</td>
                  <td className="py-[0.5rem] px-[1rem]">{user.LName}</td>
                  <td className="py-[0.5rem] px-[1rem]">{user.email}</td>
                  <td className="py-[0.5rem] px-[1rem]">
                    <button
                      className="bg-green-500 text-white px-[1rem] py-[0.5rem]"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-[0.5rem] px-[1rem]">
                    <button
                      className="bg-red-500 text-white px-[1rem] py-[0.5rem]"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        </div>

        <button onClick={handleLogout} className="text-blue-500 mt-4">
          Logout
        </button>
        <Link to="/signup" className="text-blue-500 ml-[62rem]">
          Add another Account
        </Link>
      </div>
    </div>
  );
};

export default UserManagement;
