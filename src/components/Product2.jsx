import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Product2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // true initially
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://localhost:7063/api/Product", {
        headers: {
          ApiKey: "EcommApi", // ✅ Correct header casing
        },
      });

      if (response.status === 200) {
        setProducts(response.data);
      } else {
        setError("Failed to fetch product data.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array = run once on mount

  return (
    <div>
      <h1>Product List</h1>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && products.length === 0 && <p>No products found.</p>}

      {!loading && products.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          {products.map((x) => (
            <div
              key={x.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h2>{x.name}</h2>
              <p>{x.description}</p>
              <p>
                <strong>Price:</strong> ${x.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
