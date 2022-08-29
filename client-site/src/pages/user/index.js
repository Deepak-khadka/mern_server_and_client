import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../component/common";
import {Link} from "react-router-dom";

const User = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get(`${SERVER_URL}/getUsers`).then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    axios
      .post(`${SERVER_URL}/createUser`, {
        name: name,
        age: age,
        username: username,
      })
      .then((response) => {
        setListOfUsers([{ name, age, username }, ...listOfUsers]);
        setName("");
        setAge(0);
        setUsername("");
      });
  };

  return (
    <>
      <div className="userForm">
        <input
          type="text"
          className="form-control col-4"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
          value={age}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <button className="btn btn-sm btn-primary" onClick={createUser}>Create User</button>
      </div>


      <div className="usersDisplay">

          <table className="table table-hover">
              <thead>
              <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              {listOfUsers.map((user, index) => {
                  return (

                      <tr key={index}>
                          <th scope="row">{ ++index }</th>
                          <td>{user.name}</td>
                          <td>{user.age}</td>
                          <td>{user.username}</td>
                          <td>
                              <Link to={`/user/${user._id}/show`}>Show</Link>
                              |  <Link to={`/user/${user._id}/edit`}>Edit</Link>
                              |  <Link to={`/user/${user._id}/delete`}>Delete</Link>
                          </td>
                      </tr>
                  );
              })}


              </tbody>
          </table>

      </div>
    </>
  );
};

export default User;
