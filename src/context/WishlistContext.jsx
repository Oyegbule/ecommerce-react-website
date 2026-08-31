import { createContext, useState, useContext, useEffect } from "react";
import { getProductById } from "../data/products";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

function storageKey(email) {
    return `wishlist_${email}`;
}

export default function WishlistProvider({ children }) {
    const { user } = useAuth();
    const [wishlistIds, setWishlistIds] = useState([]);

    // load this user's wishlist whenever who's logged in changes
    useEffect(() => {
        if (!user) {
            setWishlistIds([]);
            return;
        }
        const stored = JSON.parse(localStorage.getItem(storageKey(user.email)) || "[]");
        setWishlistIds(stored);
    }, [user]);

    function persist(ids) {
        setWishlistIds(ids);
        if (user) {
            localStorage.setItem(storageKey(user.email), JSON.stringify(ids));
        }
    }

    function isWishlisted(productId) {
        return wishlistIds.includes(productId);
    }

    function toggleWishlist(productId) {
        if (!user) return;
        if (wishlistIds.includes(productId)) {
            persist(wishlistIds.filter((id) => id !== productId));
        } else {
            persist([...wishlistIds, productId]);
        }
    }

    function getWishlistItemsWithProducts() {
        return wishlistIds.map((id) => getProductById(id)).filter(Boolean);
    }

    return (
        <WishlistContext.Provider
            value={{ wishlistIds, isWishlisted, toggleWishlist, getWishlistItemsWithProducts }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}
