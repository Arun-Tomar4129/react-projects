import React, { useEffect, useState } from "react";
import "./Edit.css";
import { useParams, useNavigate } from "react-router-dom";

const UserEdit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Getuserdata();
  }, []);

  const Getuserdata = async () => {
    const url = `http://localhost:3000/users/${id}`;
    let response = await fetch(url);
    response = await response.json();
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/users/${id}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });
    alert("✅ User updated successfully!");
    navigate("/"); // optional: redirect to list
  };

  return (
    <div className="Save">
      <form onSubmit={handleSubmit}>
        <h1>User Edit</h1>

        <label htmlFor="name"><strong>Name</strong>:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="age"><strong>Age</strong>:</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <label htmlFor="email"><strong>Email</strong>:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <button className="SaveButton" type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserEdit;
