import { useEffect, useState }
    from "react";

import axios from "axios";

function MyOrders() {

    const [orders, setOrders] =
        useState([]);

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders =
        async () => {

            try {

                const userId =
                    localStorage.getItem(
                        "userId"
                    );

                const response =
                    await axios.get(

                        `http://localhost:5000/api/orders/${userId}`

                    );

                setOrders(
                    response.data
                );

            }

            catch (error) {

                console.log(
                    error
                );

            }

        };

    return (

        <div
            className="container mt-4"
        >

            <h2>

                My Orders

            </h2>

            {

                orders.map(
                    (order) => (

                        <div
                            className="card p-3 mb-3"
                            key={order._id}
                        >

                            <h5>

                                Order Date:

                                {

                                    new Date(
                                        order.orderDate
                                    ).toLocaleDateString()

                                }

                            </h5>

                            <h6>

                                Payment:

                                {
                                    order.paymentMethod
                                }

                            </h6>

                            <h5>

                                Total:

                                ₹ {

                                    order.totalAmount

                                }

                            </h5>

                        </div>

                    )

                )

            }

        </div>

    );

}

export default MyOrders;