import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
    const {addToCart, cartItems} = useCart();
    const { isWishlisted, toggleWishlist } = useWishlist();
    const productInCart = cartItems.find((item) => item.id === product.id);

    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";
    const wishlisted = isWishlisted(product.id);

    const [justAdded, setJustAdded] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    function handleAddToCart() {
        addToCart(product.id);
        setJustAdded(true);

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setJustAdded(false), 1200);
    }

    return (
      <div className="product-card">
                <button
                    type="button"
                    className={`wishlist-btn ${wishlisted ? "active" : ""}`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    aria-pressed={wishlisted}
                >
                    {wishlisted ? "♥" : "♡"}
                </button>
                <img src={product.image} alt={product.name} className="product-card-image"/>
                <div className="product-card-content">
                    <h3 className="product-card-name">{product.name}</h3>
                    <p className="product-card-price">${product.price}</p>
                    <div className="product-card-actions">
                        <Link className="btn btn-secondary" to={`/productdetails/${product.id}`}>View Details</Link>
                        <button
                            className={`btn btn-primary add-to-cart-btn ${justAdded ? "added" : ""}`}
                            onClick={handleAddToCart}
                        >
                            {justAdded ? "Added ✓" : `Add to Cart ${productQuantityLabel}`}
                        </button>
                    </div>
                </div>
            </div>
    );
}  
