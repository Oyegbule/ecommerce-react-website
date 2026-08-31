import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";


export default function Home() {
    const products = getProducts();
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const filteredProducts = products.filter((product) => {
        const search = query.trim().toLowerCase();
        const matchesSearch =
            !search ||
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);

        const matchesCategory =
            activeCategory === "All" || product.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
    <div className="page">
       <div className="home-hero">
        <h1 className="home-title">Welcome to EniKicks</h1>
        <p className="home-subtitle">Clean pairs built to elevate your fit</p>
       </div>
       <div className="container">
        <h2 className="page-title">Our Products</h2>

        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder="Search shoes by name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
                <button
                    type="button"
                    className="search-clear"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                >
                    ✕
                </button>
            )}
        </div>

        <div className="category-filters">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`category-chip ${activeCategory === category ? "active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>

        {filteredProducts.length === 0 ? (
            <div className="no-results">
                <p>
                    {query
                        ? `No shoes match "${query}".`
                        : `No shoes in ${activeCategory} right now.`}
                </p>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        setQuery("");
                        setActiveCategory("All");
                    }}
                >
                    Clear filters
                </button>
            </div>
        ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard product={product}  key={product.id}/>
              ))}
            </div>
        )}
       </div>
    </div>
    );
}
