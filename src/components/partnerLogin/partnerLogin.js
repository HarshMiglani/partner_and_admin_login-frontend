import React, {useState} from "react"
import "./partnerLogin.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const partnerLogin = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:"",
        userInfo:"Partner"
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const partnerLogin = () => {
        axios.post("http://localhost:9002/partnerLogin", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            {res.data.message === "User is registered as Admin" ?history.push("/adminLogin") : history.push("/partner")}
        })
    }

    return (
        <div className="login">
            <h1>Partner Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={partnerLogin}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/adminRegister")}>Admin Register</div>
            <div className="button" onClick={() => history.push("/partnerRegister")}>Partner Register</div>
            <div className="button" onClick={() => history.push("/adminLogin")}>Admin Login</div>
        </div>
    )
}

export default partnerLogin