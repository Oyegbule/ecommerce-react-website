import { Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";

export default function Orders() {
    const { orders } = useOrders();

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Order History</h1>

                {orders.length === 0 ? (
                    <div className="no-results">
                        <p>You haven't placed any orders yet.</p>
                        <Link to="/" className="btn btn-secondary">
                            Browse products
                        </Link>
                    </div>
                ) : (
                    <div className="orders-list">
                        {orders.map((order) => (
                            <div className="order-card" key={order.id}>
                                <div className="order-card-header">
                                    <span className="order-date">
                                        {new Date(order.date).toLocaleDateString(undefined, {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                    <span className="order-total">${order.total.toFixed(2)}</span>
                                </div>

                                {order.items.map((item) => (
                                    <div className="checkout-item" key={item.id}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="checkout-item-image"
                                        />
                                        <div className="checkout-item-details">
                                            <h3 className="checkout-item-name">{item.name}</h3>
                                            <p className="checkout-item-price">
                                                ${item.price} × {item.quantity}
                                            </p>
                                        </div>
                                        <p className="checkout-item-total">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
