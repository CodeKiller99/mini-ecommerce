import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cart } = useCart();

    return (
        <div className="bg-white shadow p-4 flex justify-between">
            <Link to="/" className="font-bold">🛍 Store</Link>
            <Link to="/cart">Carrito ({cart.length})</Link>
        </div>
    );
}

export default Navbar;