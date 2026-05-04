import { Link } from "react-router-dom";

function Success() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

            <div className="bg-white p-10 rounded-xl shadow text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">
                    🎉 Compra realizada con éxito
                </h1>

                <p className="text-gray-600 mb-6">
                    Gracias por tu compra. Te enviaremos un correo con los detalles.
                </p>

                <Link
                    to="/"
                    className="bg-blue-600 text-white px-6 py-2 rounded"
                >
                    Volver a la tienda
                </Link>
            </div>

        </div>
    );
}

export default Success;