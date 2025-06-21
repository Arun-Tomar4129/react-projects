import React from "react";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import UserEdit from "./UserEdit";

const App = () => {
  return (
    <div>
    
    <Routes>
      <Route path="/" element={ <UserList/>}/>
      <Route path="/list" element={<UserList />} />
      <Route path="UserAdd" element={<UserAdd />} />
      <Route path="/edit/:id" element={<UserEdit/>}/>
    </Routes>
    </div>
  );
};

export default App;
