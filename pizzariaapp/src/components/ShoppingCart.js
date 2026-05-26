import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {

    useEffect(() => {

        const token =
            localStorage.getItem(
                "token"
            );

        if (!token) {

            alert(
                "🔒 Please login or create an account first"
            );

            window.location.href =
                "/login";

            return;

        }

        fetchCartItems();

    }, []);

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetchCartItems();

    }, []);

    const fetchCartItems = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/api/cart/${localStorage.getItem(
                    "userId"
                )
                }`
            );

            setCartItems(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    const updateQuantity = async (id, quantity) => {

        try {

            await axios.put(
                `http://localhost:5000/api/cart/${id}`,
                { quantity }
            );

            fetchCartItems();

        } catch (error) {

            console.log(error);

        }
    };

    const deleteItem = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/api/cart/${id}`
            );

            fetchCartItems();

        } catch (error) {

            console.log(error);

        }
    };

    const totalAmount = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (

        <div className="container mt-4">

            <h1 className="mb-4">
                Shopping Cart
            </h1>

            {
                cartItems.map((item) => (

                    <div
                        key={item._id}
                        className="card p-3 mb-3 shadow"
                    >

                        <div className="row align-items-center">

                            <div className="col-md-3">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    width="100%"
                                    height="150"
                                />

                            </div>

                            <div className="col-md-3">

                                <h4>{item.name}</h4>

                                <h5>₹ {item.price}</h5>

                            </div>

                            <div className="col-md-3">

                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={() => {

                                        if (item.quantity > 1) {

                                            updateQuantity(
                                                item._id,
                                                item.quantity - 1
                                            );

                                        }

                                    }}
                                >
                                    -
                                </button>

                                <span className="fw-bold">
                                    {item.quantity}
                                </span>

                                <button
                                    className="btn btn-secondary ms-2"
                                    onClick={() =>
                                        updateQuantity(
                                            item._id,
                                            item.quantity + 1
                                        )
                                    }
                                >
                                    +
                                </button>

                            </div>

                            <div className="col-md-3">

                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        deleteItem(item._id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>
                ))
            }

            <div className="mt-4">

                <h2>
                    Total Amount : ₹ {totalAmount}
                </h2>

                <button

                    className="btn btn-success mt-3"

                    onClick={() => {

                        if (
                            cartItems.length === 0
                        ) {

                            alert(
                                "🛒 Your cart is empty"
                            );

                            return;
                        }

                        navigate(
                            "/checkout"
                        );

                    }}

                >

                    Proceed To Checkout

                </button>

            </div>

        </div>
    );
}

export default ShoppingCart;