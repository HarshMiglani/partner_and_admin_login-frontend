import React, { useState } from "react"
import "./partnerRegister.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const partnerRegister = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        userInfo: "Partner"
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const partnerRegister = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/partnerRegister", user)
            .then( res => {
                alert(res.data.message)
                {res.data.message === "User already registerd as Admin" ?history.push("/adminLogin") : history.push("/partnerLogin")}
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Partner Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={partnerRegister} >Partner Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/partnerLogin")}>Partner Login</div>
            <div className="button" onClick={() => history.push("/adminLogin")}>Admin Login</div>
            <div className="button" onClick={() => history.push("/adminRegister")}>Admin Register</div>
        </div>
    )
}

export default partnerRegister