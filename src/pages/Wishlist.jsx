import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
    const { getWishlistItemsWithProducts } = useWishlist();
    const items = getWishlistItemsWithProducts();

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Your Wishlist</h1>

                {items.length === 0 ? (
                    <div className="no-results">
                        <p>You haven't saved anything yet.</p>
                        <Link to="/" className="btn btn-secondary">
                            Browse products
                        </Link>
                    </div>
                ) : (
                    <div className="product-grid">
                        {items.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
