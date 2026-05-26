import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const registerUser = async () => {

        try {

            await axios.post(
                "http://localhost:5000/api/register",
                {
                    name,
                    email,
                    password
                }
            );

            alert(
                "Registration Successful"
            );

            navigate("/login");

        }

        catch(error){

            alert(
                "User already exists"
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

Join Pizzaria 🍕

</h2>

<p>

Create your account

</p>

</div>

<input
className="form-control mb-3"
placeholder="Name"
onChange={(e)=>
setName(
e.target.value
)}
/>

<input
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
onClick={registerUser}
>

Register

</button>

<div
className="text-center mt-3"
>

Already have an account? <br></br>

<Link
to="/login"
>

 Login

</Link>

</div>

</div>

</div>

);

}

export default Register;