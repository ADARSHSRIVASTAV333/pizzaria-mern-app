import { useState } from "react";
import axios from "axios";

function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const registerUser=async()=>{

        try{

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

        }
        catch(error){

            console.log(error);

        }

    }

    return(

        <div className="container mt-5">

            <h2>Register</h2>

            <input
            className="form-control mb-3"
            placeholder="Name"
            onChange={(e)=>
                setName(e.target.value)
            }
            />

            <input
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e)=>
                setEmail(e.target.value)
            }
            />

            <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e)=>
                setPassword(e.target.value)
            }
            />

            <button
            className="btn btn-success"
            onClick={registerUser}
            >
            Register
            </button>

        </div>

    );

}

export default Register;