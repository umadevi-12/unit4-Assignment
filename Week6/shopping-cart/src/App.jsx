import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

function App() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Mouse", price: 700 },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#007bff" }}>🛒 Shopping Cart</h1>

        <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px" }}>
          Products
        </h2>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{product.name} - ₹{product.price}</span>
            <button
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(addItem(product))}
            >
              Add
            </button>
          </div>
        ))}

        <h2 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", marginTop: "20px" }}>
          Cart Items
        </h2>
        {items.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888" }}>No items in cart.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.name} - ₹{item.price}</span>
              <button
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))
        )}

        <h2 style={{ textAlign: "center", marginTop: "20px", color: "#333" }}>
          Total Price: ₹{total}
        </h2>
      </div>
    </div>
  );
}

export default App;
