import React, {useState} from 'react'


const Form = () => {
    const [FormData, setFormData] = useState({
        firstName: '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name] : value,
        }))
    }

    return (
        <div>
          <form>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={FormData.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={FormData.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={FormData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={FormData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </form>
    
          <h2>Your Form Data</h2>
          <p>First Name: {FormData.firstName}</p>
          <p>Last Name: {FormData.lastName}</p>
          <p>Email: {FormData.email}</p>
          <p>Password: {FormData.password}</p>
          <p>Confirm Password: {FormData.confirmPassword}</p>
        </div>
      );
}
export default Form