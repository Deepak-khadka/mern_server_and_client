import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {SERVER_URL} from "../../component/common";

const showUser = () => {

    const {_id } = useParams();
    const [user, setUser] = useState([]);

    const findUserById = (_id) => {
        axios.get(`${SERVER_URL}/api/user/${_id}/show`).then((response) => {
            setUser(response.data)
        });
    }

    useEffect( () => {
        findUserById(_id)
    }, []);

    return (
        <>
            <div className="card">

                <div className="card-header">

                    <div className="pull-right">
                        <Link to="/user" className="btn btn-sm  btn-primary">Go Back</Link>
                    </div>

                    <div className="pull-left">
                        { user.name }
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ user.age }</h5>
                    <p className="card-text">{ user.username }</p>
                </div>
            </div>
        </>
    )
}

export default showUser;