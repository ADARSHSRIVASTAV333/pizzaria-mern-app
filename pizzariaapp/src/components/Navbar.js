import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {

    const token =
        localStorage.getItem(
            "token"
        );

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        localStorage.removeItem(
            "userId"
        );

        localStorage.removeItem(
            "username"
        );

        window.location.href = "/login";

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

            <Link
                to="/"
                className="navbar-brand d-flex align-items-center"
            >

                <h1 className="me-3">

                    Pizzeria

                </h1>

                <img
                    src={logo}
                    alt="logo"
                    width="80"
                    height="60"
                />

            </Link>

            <div className="navbar-nav ms-4">

                <Link
                    to="/order"
                    className="nav-link text-white"
                >

                    Order Pizza

                </Link>

                <Link
                    to="/build"
                    className="nav-link text-white"
                >

                    Build Ur Pizza

                </Link>

            </div>

            <div className="ms-auto d-flex">

                <Link
                    to="/cart"
                    className="btn btn-warning me-3"
                >

                    🛒 Shopping Cart

                </Link>

                {

                    token ?

                        <>

                            <span
                                className="text-white me-3 mt-2"
                            >

                                Welcome {

                                    localStorage.getItem(
                                        "username"
                                    ) !== "undefined"

                                        ?

                                        localStorage.getItem(
                                            "username"
                                        )

                                        :

                                        "User"

                                }

                            </span>

                            <Link
                                to="/myorders"
                                className="btn btn-info me-2"
                            >

                                My Orders

                            </Link>

                            <button
                                className="btn btn-danger"
                                onClick={logout}
                            >

                                Logout

                            </button>

                        </>

                        :

                        <>

                            <Link
                                to="/login"
                                className="btn btn-outline-light me-2"
                            >

                                Login

                            </Link>

                            <Link
                                to="/register"
                                className="btn btn-success"
                            >

                                Register

                            </Link>

                        </>

                }

            </div>

        </nav>

    );

}

export default Navbar;