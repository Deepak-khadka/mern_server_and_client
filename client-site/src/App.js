import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import User from "./pages/user";
import Home from "./pages/Home";
import Category from "./pages/category";
import EditUser from "./pages/user/edit";
import ShowUser from "./pages/user/show";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/category" element={<Category />} />
          <Route path="/user/:_id/edit" element={ <EditUser /> } />
          <Route path="/user/:_id/show" element={ <ShowUser /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
