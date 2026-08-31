import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

const OrderContext = createContext(null);

function storageKey(email) {
    return `orders_${email}`;
}

export default function OrderProvider({ children }) {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!user) {
            setOrders([]);
            return;
        }
        const stored = JSON.parse(localStorage.getItem(storageKey(user.email)) || "[]");
        setOrders(stored);
    }, [user]);

    // itemsWithProducts is the array returned by getCartItemsWithProducts()
    function addOrder(itemsWithProducts, total) {
        if (!user) return;

        const newOrder = {
            id: Date.now(),
            date: new Date().toISOString(),
            total,
            items: itemsWithProducts.map((item) => ({
                id: item.id,
                name: item.product.name,
                price: item.product.price,
                image: item.product.image,
                quantity: item.quantity,
            })),
        };

        const updated = [newOrder, ...orders];
        setOrders(updated);
        if (user) {
            localStorage.setItem(storageKey(user.email), JSON.stringify(updated));
        }
    }

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrders() {
    return useContext(OrderContext);
}
