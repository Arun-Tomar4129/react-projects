import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ correct import
import "./App.css";

const UserList = () => {
  const navigation=useNavigate();
  const [DeleteMsg,setDeleteMsg]=useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate(); // ✅ useNavigate initialized
   const url = "http://localhost:3000/users";

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
   
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  };

  const handleAddUser = () => {
    navigate("/UserAdd"); // ✅ go to UserAdd page
  };
  const DeletUser =async(id)=>{
    let response = await fetch(url+"/"+id,{
      method:'delete'
    });
    response = await response.json()
    if(response){
       setDeleteMsg(true);//make improve
       setTimeout(()=>{
        setDeleteMsg(false);
       },1000)
      getUserData();

    }
  }
  const EditUser =(id)=>{
      navigation("/edit/"+id)
  }
  return (
    <div className="bodies">
      <div className="Header" style={{ backgroundColor: "#FFAF00", padding: "20px" }}>
        <h1 className="heading">
          User Data from My Server (Students of TMU)
        </h1>
      </div>
  {
    DeleteMsg && (
      <div className="POPup">
        <h1>🗑️ Delete Record! </h1>
      </div>
    )
  }
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <table className="User-data" border="1" cellPadding="10">
          <thead>
            <tr style={{ backgroundColor: "#ffd95a" }}>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} style={{ backgroundColor: "#fff8e1" }}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td><button className="Tablebutton" onClick={()=>DeletUser(user.id)}>Delete</button></td>
                <td><button className="Tablebutton" onClick={()=>EditUser(user.id)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div>
        <button onClick={handleAddUser} className="Add-user">
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserList;
