import React, {useState} from "react";
import './from.css'


const UserForm = () =>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [users, setUsers] = useState([])
    const [formSubmit, setFormSubmit] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }
        setUsers([...users, newUser]);
        clearForm();
        setFormSubmit(true)
    }

    const clearForm = () =>{
        setFirstName("");
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    const formMessage = () => {
        if( formSubmit ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };

    const validateFirstName = firstName.length > 0 && firstName.length < 2;
    const validateLastName = lastName.length > 0 && lastName.length < 2;
    const validateEmail = email.length > 0 && email.length < 8;
    const validatePassword = password.length > 0 && password.length < 8;
    const validateConfirmPassword = confirmPassword !== password

    return(
        <div className="form-container">
            <h1>{formMessage()}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name :</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {validateFirstName && <p>First Name must be at least 2 characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name :</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {validateLastName && <p>Last Name must be at least 2 characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">email :</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {validateEmail && <p>Email must be at least 8 characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Password :</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {validatePassword && <p>Password must be at least 8 characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password :</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {validateConfirmPassword && <p>Password don't math</p>}
                </div>
                <button type="submit">Create user</button>
            </form>
            <div className="users-list">
                <h2>Users List</h2>
                {users.map((user, index) => (
                    <div key={index} className="user-item">
                        <p>Name : {user.firstName} {user.lastName}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserForm;