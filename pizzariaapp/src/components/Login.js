import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

            window.location.href = "/";

            alert(

                "Login Successful"

            );

            navigate("/");

        }

        catch (error) {

            alert(

                "Invalid Login"

            );

        }

    };

    return (

        <div className="container mt-5">

            <h2>

                Login

            </h2>

            <input

                className="form-control mb-3"

                placeholder="Email"

                onChange={(e) =>

                    setEmail(
                        e.target.value
                    )

                }

            />

            <input

                type="password"

                className="form-control mb-3"

                placeholder="Password"

                onChange={(e) =>

                    setPassword(
                        e.target.value
                    )

                }

            />

            <button

                className="btn btn-primary"

                onClick={loginUser}

            >

                Login

            </button>

        </div>

    );

}

export default Login;