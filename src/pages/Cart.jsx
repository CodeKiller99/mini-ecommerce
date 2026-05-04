import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        total,
    } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold">Carrito</h1>

                {cart.length === 0 ? (
                    <p className="mt-4">Tu carrito está vacío</p>
                ) : (
                    cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center bg-white p-4 rounded-xl shadow mt-4"
                        >
                            {/* INFO */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 h-16 object-contain"
                                />

                                <div>
                                    <p className="font-semibold text-sm">{item.title}</p>
                                    <p className="text-blue-600 font-bold">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>

                            {/* CONTROLES */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => decreaseQty(item.id)}
                                    className="bg-gray-200 px-3 py-1 rounded"
                                >
                                    -
                                </button>

                                <span className="font-semibold">
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() => increaseQty(item.id)}
                                    className="bg-gray-200 px-3 py-1 rounded"
                                >
                                    +
                                </button>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 ml-4"
                                >
                                    ❌
                                </button>

                            </div>
                        </div>
                    ))
                )}

                <div className="mt-6 text-right">
                    <h2 className="text-xl font-bold">
                        Total: ${total.toFixed(2)}
                    </h2>
                </div>

                <button
                    onClick={() => navigate("/checkout")}
                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
                >
                    Ir a checkout
                </button>

            </div>
        </>
    );
}

export default Cart;