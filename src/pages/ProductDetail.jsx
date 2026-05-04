import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        getProductById(id).then(setProduct);
    }, [id]);

    if (!product) return <p>Cargando...</p>;

    return (
        <>
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                <img src={product.image} className="h-60 mx-auto" />
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p>{product.description}</p>
                <p className="text-xl font-bold mt-4">${product.price}</p>

                <button
                    onClick={() => addToCart(product)}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
                >
                    Agregar al carrito
                </button>
            </div>
        </>
    );
}

export default ProductDetail;