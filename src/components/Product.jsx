import React, { useState } from "react";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://localhost:7063/api/Product", {
        headers: {
          ApiKey: "EcommApi", // ✅ Correct casing
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

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={fetchProducts} disabled={loading}>
        {loading ? "Loading..." : "Get Product Data"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {products.length > 0 ? (
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
      ) : (
        !loading && <p>No products to display.</p>
      )}
    </div>
  );
}
