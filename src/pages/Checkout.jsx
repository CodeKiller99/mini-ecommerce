import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const { cart, total } = useCart();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // VALIDACIÓN SIMPLE
        if (!form.name || !form.email || !form.address) {
            setError("Todos los campos son obligatorios");
            return;
        }

        // SIMULAR COMPRA
        alert("Compra realizada con éxito 🎉");

        // REDIRECCIONAR
        navigate("/");
    };

    return (
        <>
            <Navbar />

            <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">

                {/* FORMULARIO */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">Datos de envío</h2>

                    {error && (
                        <p className="text-red-500 mb-2">{error}</p>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre completo"
                            value={form.name}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Correo"
                            value={form.email}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección"
                            value={form.address}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 rounded"
                        >
                            Finalizar compra
                        </button>
                    </form>
                </div>

                {/* RESUMEN */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">Resumen</h2>

                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between mb-2">
                            <span>{item.title}</span>
                            <span>
                x{item.quantity} - $
                                {(item.price * item.quantity).toFixed(2)}
              </span>
                        </div>
                    ))}

                    <hr className="my-4" />

                    <h3 className="text-lg font-bold">
                        Total: ${total.toFixed(2)}
                    </h3>
                </div>

            </div>
        </>
    );
}

export default Checkout;