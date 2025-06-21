import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './AppAdd.css';

const UserAdd = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // ✅ for redirecting

  const AddUser = async (e) => {
    e.preventDefault(); // ✅ prevent page reload

    const url = "http://localhost:3000/users";

    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // ✅ must include
      body: JSON.stringify({ name, age, email })
    });

    response = await response.json();

    if (response) {
      alert("✅ New user added successfully");
      navigate("/"); // ✅ redirect to UserList page
    }
  };

  return (
    <div className="main">
      <form onSubmit={AddUser}>
        <h1>Add New User</h1>

        <label htmlFor="Name"><strong>Name:</strong></label>
        <input
          type="text"
          name="name"
          id="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="Age"><strong>Age:</strong></label>
        <input
          type="number"
          name="age"
          id="Age"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label htmlFor="Email"><strong>Email:</strong></label>
        <input
          type="email"
          name="email"
          id="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserAdd;
