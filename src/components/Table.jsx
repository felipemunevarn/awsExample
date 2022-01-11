import React, { useState, useEffect } from 'react';

const Table = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []); 

    const fetchUsers = () => {
        fetch('users/signin')
            .then(res => res.json())
            .then(data => {
                setUsers(() => data);
            })
            .catch(err => console.error(err));
    }    

    const editUser = (id) => {
        console.log(id);
    }

    const deleteUser = (id) => {
        fetch(`/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetchUsers();
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="col-md-6 offset-md-1">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => {
                        return (
                            <tr key={u._id}>
                                <th scope="row">{u.id}</th>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td><button type="button" class="btn btn-warning" onClick={() => editUser(u._id)}>Edit</button></td>
                                <td><button type="button" class="btn btn-danger" onClick={() => deleteUser(u._id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;