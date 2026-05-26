import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrderPizza() {

    const [pizzas, setPizzas] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetchPizzas();

    }, []);

    const fetchPizzas = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/pizzas"
            );

            setPizzas(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    const addToCart = async (pizza) => {

        const token =
        localStorage.getItem(
            "token"
        );

        if(!token){

            alert(
                "🔒 Please login or create an account first"
            );

            window.location.href=
            "/login";

            return;
        }

        try {

            await axios.post(
                "http://localhost:5000/api/cart",
                {
                    name: pizza.name,
                    image: pizza.image,
                    price: pizza.price,
                    quantity: 1,

                    userId:
                    localStorage.getItem(
                        "userId"
                    )
                }
            );

            alert(
                "Pizza Added To Cart"
            );

        } catch (error) {

            console.log(error);

        }

    };

    const customizePizza = (pizza) => {

        const token =
        localStorage.getItem(
            "token"
        );

        if(!token){

            alert(
                "🔒 Please login or create an account first"
            );

            window.location.href=
            "/login";

            return;
        }

        navigate(
            "/build",
            {
                state:pizza
            }
        );

    };

    return (

        <div className="container mt-4">

            <div className="row">

                {
                    pizzas.map((pizza) => (

                        <div
                            className="col-md-6 mb-4"
                            key={pizza._id}
                        >

                            <div className="card shadow p-3 h-100">

                                <div className="row">

                                    <div className="col-md-7">

                                        <h2>

                                            {pizza.name}

                                        </h2>

                                        <p>

                                            {pizza.description}

                                        </p>

                                        <p>

                                            <strong>

                                                Ingredients :

                                            </strong>

                                            {

                                                pizza.ingredients.join(", ")

                                            }

                                        </p>

                                        <p>

                                            <strong>

                                                Toppings :

                                            </strong>

                                            {

                                                pizza.topping.join(", ")

                                            }

                                        </p>

                                        <h4>

                                            ₹ {pizza.price}

                                        </h4>

                                    </div>

                                    <div className="col-md-5 text-center">

                                        <img
                                            src={pizza.image}
                                            alt={pizza.name}
                                            width="100%"
                                            height="180"
                                        />

                                        <button
                                            className="btn btn-warning mt-3 w-100"
                                            onClick={() =>
                                                addToCart(pizza)
                                            }
                                        >

                                            Add To Cart

                                        </button>

                                        <button
                                            className="btn btn-dark mt-2 w-100"
                                            onClick={() =>
                                                customizePizza(
                                                    pizza
                                                )
                                            }
                                        >

                                            Customize

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

            <footer className="text-center mt-4 mb-3">

                <small style={{color:"orange"}}>

                    Copyrights © 2017 Pizzeria.
                    All rights reserved.

                </small>

            </footer>

        </div>

    );

}

export default OrderPizza;