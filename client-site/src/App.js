import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    axios
      .post("http://localhost:3001/createUser", {
        name: name,
        age: age,
        username: username,
      })
      .then((response) => {
        setListOfUsers([...listOfUsers, { name, age, username }]);
        setName("");
        setAge(0);
        setUsername("");
      });
  };

  return (
    <div className="App">
      <div className="userForm">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
          value={age}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <button onClick={createUser}>Create User</button>
      </div>
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1> Name : {user.name} </h1>
              <h3> Age : {user.age} </h3>
              <h3> Username: {user.username}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
