import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const proceedPayment = () => {

        if (
            !name ||
            !address ||
            !phone
        ) {

            alert(
                "Fill all fields"
            );

            return;

        }

        localStorage.setItem(
            "customerName",
            name
        );

        localStorage.setItem(
            "customerAddress",
            address
        );

        localStorage.setItem(
            "customerPhone",
            phone
        );

        navigate("/payment");

    };

    return (

        <div className="container mt-5">

            <h2>

                Checkout

            </h2>

            <input
                className="form-control mb-3"
                placeholder="Name"
                onChange={(e) =>
                    setName(
                        e.target.value
                    )}
            />

            <input
                className="form-control mb-3"
                placeholder="Address"
                onChange={(e) =>
                    setAddress(
                        e.target.value
                    )}
            />

            <input
                className="form-control mb-3"
                placeholder="Phone Number"
                onChange={(e) =>
                    setPhone(
                        e.target.value
                    )}
            />

            <button
                className="btn btn-success"
                onClick={
                    proceedPayment
                }
            >

                Proceed To Payment

            </button>

        </div>

    );

}

export default Checkout;