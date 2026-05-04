import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 cursor-pointer flex flex-col"
        >
            {/* IMAGEN */}
            <div className="h-48 w-full flex items-center justify-center overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain"
                />
            </div>

            {/* TEXTO */}
            <div className="mt-4">
                <h3 className="text-sm font-semibold line-clamp-2">
                    {product.title}
                </h3>

                <p className="text-blue-600 font-bold mt-2">
                    ${product.price}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;