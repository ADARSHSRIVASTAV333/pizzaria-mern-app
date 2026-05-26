import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function BuildPizza() {

    const location = useLocation();

    const selectedPizza = location.state;

    const [ingredients, setIngredients] = useState([]);

    const [showMessage, setShowMessage] = useState(false);

    const [total, setTotal] = useState(
        selectedPizza?.price || 0
    );

    const [selectedIngredients, setSelectedIngredients] =
        useState([]);

    const fetchIngredients = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/ingredients"
            );

            setIngredients(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        fetchIngredients();

    }, []);

    const handleIngredient = (e, item) => {

        if (e.target.checked) {

            setTotal((prev) =>
                prev + item.price
            );

            setSelectedIngredients((prev) => [
                ...prev,
                item.tname
            ]);

        } else {

            setTotal((prev) =>
                prev - item.price
            );

            setSelectedIngredients((prev) =>
                prev.filter(
                    (ingredient) =>
                        ingredient !== item.tname
                )
            );

        }
    };

    const addCustomizedPizzaToCart = async () => {

        if (!selectedPizza) {

            setShowMessage(true);

            return;
        }

        try {

            await axios.post(
                "http://localhost:5000/api/cart",
                {
                    name:
                        selectedPizza.name +
                        " (Customized)",

                    image: selectedPizza.image,

                    price: total,

                    quantity: 1,

                    toppings: selectedIngredients,

                    userId:
                    localStorage.getItem(
                        "userId"
                    )
                }
            );

            alert(
                "Customized Pizza Added To Cart"
            );

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="container mt-3">

            {
                showMessage && (

                    <div className="alert alert-warning text-center">

                        Please select a pizza first

                    </div>

                )
            }

            <h2 className="text-center mb-3">

                Customize Your Pizza

            </h2>

            <h4 className="text-center mb-4">

                Base Price :
                ₹ {selectedPizza?.price || 0}

            </h4>

            <p className="text-center">

                Customize your pizza by choosing
                ingredients from the list below

            </p>

            <div className="d-flex justify-content-center">

                <table
                    className="table table-bordered shadow"
                    style={{ width: "550px" }}
                >

                    <tbody>

                        {
                            ingredients.map((item) => (

                                <tr key={item._id}>

                                    <td width="30%">

                                        <img
                                            src={item.image}
                                            alt={item.tname}
                                            width="80"
                                            height="60"
                                        />

                                    </td>

                                    <td>

                                        <strong>
                                            {item.tname}
                                        </strong>

                                    </td>

                                    <td>

                                        ₹ {item.price}

                                    </td>

                                    <td>

                                        <input
                                            type="checkbox"
                                            onChange={(e) =>
                                                handleIngredient(
                                                    e,
                                                    item
                                                )
                                            }
                                        />

                                    </td>

                                    <td
                                        style={{
                                            color: "orange"
                                        }}
                                    >

                                        Add

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

            <div className="text-center">

                <h2 style={{ color: "darkblue" }}>

                    Total Cost : ₹ {total}

                </h2>

                <button
                    className="btn btn-warning mt-3"
                    onClick={
                        addCustomizedPizzaToCart
                    }
                >

                    Build Ur Pizza

                </button>

            </div>

            <footer className="text-center mt-4 mb-3">

                <small style={{ color: "orange" }}>

                    Copyrights © 2017 Pizzeria.
                    All rights reserved.

                </small>

            </footer>

        </div>
    );
}

export default BuildPizza;