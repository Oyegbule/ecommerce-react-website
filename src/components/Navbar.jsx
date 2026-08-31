import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand" onClick={closeMenu}>
                    EniKicks
                </Link>

                <button
                    className={`navbar-toggle ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span className="navbar-toggle-bar"></span>
                    <span className="navbar-toggle-bar"></span>
                    <span className="navbar-toggle-bar"></span>
                </button>

                <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
                    {user && (
                        <div className="navbar-links">
                            <Link to="/" className="navbar-link" onClick={closeMenu}>
                                Home
                            </Link>
                            <Link to="/checkout" className="navbar-link" onClick={closeMenu}>
                                Cart
                            </Link>
                            <Link to="/wishlist" className="navbar-link" onClick={closeMenu}>
                                Wishlist
                            </Link>
                            <Link to="/orders" className="navbar-link" onClick={closeMenu}>
                                Orders
                            </Link>
                        </div>
                    )}

                    <div className="navbar-auth">
                        {!user ? (
                            <div className="navbar-auth-links">
                                <Link to="/auth" className="btn btn-secondary" onClick={closeMenu}>
                                    Login
                                </Link>
                                <Link to="/auth" className="btn btn-primary" onClick={closeMenu}>
                                    SignUp
                                </Link>
                            </div>
                        ) : (
                            <div className="navbar-user">
                                <span className="navbar-greeting">Hello, {user.email}</span>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        logout();
                                        closeMenu();
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
