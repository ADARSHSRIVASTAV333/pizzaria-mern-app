import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginUser = async () => {

        try {

            const response =
            await axios.post(

                "http://localhost:5000/api/login",

                {
                    email,
                    password
                }

            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "userId",
                response.data.userId
            );

            localStorage.setItem(
                "username",
                response.data.username
            );

            alert(
                "Login Successful"
            );

            window.location.href="/";
        }

        catch(error){

            alert(
                "Invalid Login"
            );

        }

    };

    return(

<div
className="container-fluid vh-100 d-flex justify-content-center align-items-center"
style={{

background:
"linear-gradient(to right,#ff9966,#ff5e62)"

}}
>

<div
className="card shadow-lg p-5"
style={{

width:"420px",
borderRadius:"20px"

}}
>

<div className="text-center">

<img
src={logo}
alt="logo"
width="90"
/>

<h2 className="mt-3">

Welcome Back 🍕

</h2>

<p>

Login to continue

</p>

</div>

<input
type="email"
className="form-control mb-3"
placeholder="Email"

onChange={(e)=>
setEmail(
e.target.value
)}
/>

<input
type="password"
className="form-control mb-4"
placeholder="Password"

onChange={(e)=>
setPassword(
e.target.value
)}
/>

<button
className="btn btn-warning w-100"
onClick={loginUser}
>

Login

</button>

<div
className="text-center mt-3"
>

Don't have an account? <br></br>

<Link
to="/register"
>

 Register

</Link>

</div>

</div>

</div>

);

}

export default Login;