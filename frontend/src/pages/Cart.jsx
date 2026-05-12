import { useEffect, useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8081/api/cart"
            );

            setCartItems(response.data);

        } catch (error) {

            console.error(error);
        }
    };

    const removeCartItem = async (id) => {

        try {

            await axios.delete(
                `http://localhost:8081/api/cart/${id}`
            );

            toast.success("Item Removed");

            fetchCartItems();

        } catch (error) {

            console.error(error);
        }
    };

    useEffect(() => {

        fetchCartItems();

    }, []);

    const totalPrice = cartItems.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0
    );

    return (

        <div className="min-h-screen bg-gray-950 text-white p-8">

            <h1 className="text-4xl font-bold text-blue-400 mb-10">

                Shopping Cart

            </h1>

            <div className="grid gap-6">

                {
                    cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="bg-gray-900 p-5 rounded-xl shadow-lg flex justify-between items-center"
                        >

                            <div>

                                <h2 className="text-2xl font-bold">

                                    {item.productName}

                                </h2>

                                <p>
                                    ₹ {item.price}
                                </p>

                                <p>
                                    Quantity: {item.quantity}
                                </p>

                            </div>

                            <button
                                onClick={() => removeCartItem(item.id)}
                                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                            >
                                Remove
                            </button>

                        </div>
                    ))
                }

            </div>

            <div className="mt-10 text-3xl font-bold text-green-400">

                Total: ₹ {totalPrice}

            </div>

        </div>
    );
}

export default Cart;