import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Payment() {

    const [paymentMethod, setPaymentMethod] =
        useState("");

    const navigate = useNavigate();

    const placeOrder = async () => {

        console.log("Button Clicked");
        if (!paymentMethod) {

            alert(
                "Select payment method"
            );

            return;

        }

        try {

            const userId =
                localStorage.getItem(
                    "userId"
                );

            // Get cart items
            const cartResponse =
                await axios.get(

                    `http://localhost:5000/api/cart/${userId}`

                );

            const cartItems =
                cartResponse.data;

            // Calculate total amount

            const totalAmount =
                cartItems.reduce(

                    (total, item) =>

                        total +
                        item.price *
                        item.quantity,

                    0

                );

            // Save order

            console.log({

                userId,

                name:
                    localStorage.getItem(
                        "customerName"
                    ),

                address:
                    localStorage.getItem(
                        "customerAddress"
                    ),

                phone:
                    localStorage.getItem(
                        "customerPhone"
                    ),

                paymentMethod,

                items:
                    cartItems,

                totalAmount

            });

            await axios.post(

                "http://localhost:5000/api/orders",

                {

                    userId,

                    name:
                        localStorage.getItem(
                            "customerName"
                        ),

                    address:
                        localStorage.getItem(
                            "customerAddress"
                        ),

                    phone:
                        localStorage.getItem(
                            "customerPhone"
                        ),

                    paymentMethod,

                    items:
                        cartItems,

                    totalAmount

                }

            );

            // Clear cart

            for (

                let item of
                cartItems

            ) {

                await axios.delete(

                    `http://localhost:5000/api/cart/${item._id}`

                );

            }

            alert(
                "Order Placed Successfully"
            );

            navigate("/cart");

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">

            <h2>

                Payment

            </h2>

            <div className="mt-4">

                <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    onChange={(e) =>
                        setPaymentMethod(
                            e.target.value
                        )}
                />

                {" "}UPI

                <br /><br />

                <input
                    type="radio"
                    name="payment"
                    value="Card"
                    onChange={(e) =>
                        setPaymentMethod(
                            e.target.value
                        )}
                />

                {" "}Credit Card

                <br /><br />

                <input
                    type="radio"
                    name="payment"
                    value="COD"
                    onChange={(e) =>
                        setPaymentMethod(
                            e.target.value
                        )}
                />

                {" "}Cash On Delivery

            </div>

            <button
                className="btn btn-success mt-4"
                onClick={placeOrder}
            >

                Place Order

            </button>

        </div>

    );

}

export default Payment;