import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadAllUsers();
    })

    const loadAllUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/auth/users")
        setUsers(result.data)
    }

    return (
        <div className="container">
            <table className="table mt-5">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => (
                        <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-link mx-2"><i className="bi bi-box-arrow-in-up"></i></button>
                                <button className="btn btn-link text-info mx-2"><i className="bi bi-pencil-square"></i></button>
                                <button className="btn btn-link text-danger mx-2"><i className="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}