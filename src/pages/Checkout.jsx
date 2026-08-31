import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

export default function Checkout() {
    const {getCartItemsWithProducts, updateQuantity, removeFromCart, getCartTotal, clearCart} = useCart();
    const { addOrder } = useOrders();
    const cartItems = getCartItemsWithProducts();

    const total = getCartTotal();

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [emptyCartError, setEmptyCartError] = useState(false);

    function placeOrder() {
        if (cartItems.length === 0) {
            setEmptyCartError(true);
            return;
        }

        setEmptyCartError(false);
        addOrder(cartItems, total);
        clearCart();
        setOrderPlaced(true);
    }

    if (orderPlaced) {
        return (
            <div className="page">
                <div className="container">
                    <div className="order-success">
                        <h1 className="order-success-title">Order Placed!</h1>
                        <p className="order-success-message">
                            Thanks for shopping with EniKicks — your order is on its way.
                        </p>
                        <div style={{ marginTop: "2rem", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link to="/" className="btn btn-primary btn-large">
                                Continue Shopping
                            </Link>
                            <Link to="/orders" className="btn btn-secondary btn-large">
                                View Order History
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
    <div className="page">
        <div className="container">
            <h1 className="page-title">Checkout</h1>

            {emptyCartError && (
                <div className="error-message">
                    Your cart is empty — add something before placing an order.
                </div>
            )}

            <div className="checkout-container">
             <div className="checkout-items">
                <h2 className="checkout-section-title">Order Summary</h2>
                {cartItems.map((item) => (
                    <div className="checkout-item" key={item.id}>
                        <img src={item.product.image} 
                        alt={item.product.name}
                        className="checkout-item-image"
                         />
                         <div className="checkout-item-details">
                            <h3 className="checkout-item-name">{item.product.name}</h3>
                            <p className="checkout-item-price">
                                ${item.product.price} each
                            </p>
                         </div>
                         <div className="checkout-item-controls">
                            <div className="quantity-controls">
                                <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <span className="quantity-value">{item.quantity}</span>
                                <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>

                            <p className="checkout-item-total">
                                ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                                <button className="btn btn-secondary btn-small" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                         </div>
                    </div>
                ))}
             </div>

             <div className="checkout-summary">
                <h2 className="checkout-section-title">Total</h2>
                <div className="checkout-total">
                    <p className="checkout-total-label">Subtotal:</p>
                    <p className="checkout-total-value">${total.toFixed(2)}</p>
                </div>
                <div className="checkout-total">
                    <p className="checkout-total-label">Total:</p>
                    <p className="checkout-total-value checkout-total-final">${total.toFixed(2)}</p>
                </div>
                <button className="btn btn-primary btn-large btn-block" onClick={placeOrder}>Place Order</button>
             </div>
            </div>
        </div>
    </div>
    );
}
