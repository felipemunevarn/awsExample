import React, { useState, useEffect } from 'react';

const Form = props => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: 0,
        gender: "",
        personalDescription: ""
    });

    const addUser = () => {
        fetch('/users/signin', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                setUser(() => ({
                    name: "",
                    email: "",
                    age: 0,
                    gender: "",
                    personalDescription: ""
                })); 
            })
            .catch(err => console.error(err));
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user,
            [name]: value
        });
        e.preventDefault();
    }

	return (
        <div className="col-md-3 offset-md-1">
            <form onSubmit={() => addUser()}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name *</label>
                    <input type="text" className="form-control" name="name" value={user.name}
                        id="name" aria-describedby="nameHelp" onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address *</label>
                    <input type="email" className="form-control" name="email" value={user.email}
                    id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="age" className="form-label">Age (optional)</label>
                    <input type="number" className="form-control" id="age" name="age"
                    aria-describedby="ageHelp" onChange={handleChange} value={user.age}/>
                </div>
                <div className="mb-3">
                    <label for="gender" className="form-label">Gender (optional)</label>
                    <input type="text" className="form-control" id="gender" name="gender"
                    aria-describedby="genderHelp" onChange={handleChange} value={user.gender}/>
                </div>
                <div className="mb-3">
                    <label for="personalDescription" className="form-label">Personal Description (optional)</label>
                    <input type="text" className="form-control" name="personalDescription" value={user.personalDescription}
                    id="personalDescription" aria-describedby="personalDescriptionHelp" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>            
        </div>
    );
}

export default Form;