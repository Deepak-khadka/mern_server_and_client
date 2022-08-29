import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {SERVER_URL} from "../../component/common";

const EditUser = () => {

    const {_id} = useParams();

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");

    useEffect(() => {
        findUserById(_id);
    }, []);

    /* Find user by ID*/
    const findUserById = (_id) => {
        axios.get(`${SERVER_URL}/api/user/${_id}/edit`).then((response) => {
            setName(response.data.name)
            setAge(response.data.age)
            setUsername(response.data.username)
        })
    }

    /* Update the User Detail */
    const UpdateUser = () => {
        axios.post(`${SERVER_URL}/api/user/update/${_id}`, {
            name: name,
            age: age,
            username: username,
        })
            .then((response) => {
                alert(response.data.message)
            });
    };


    return (
        <>
            <h4>This is a user Edit page </h4>

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
                <button className="btn btn-sm btn-primary" onClick={UpdateUser}>Update User</button>
            </div>

        </>
    )
}

export default EditUser;