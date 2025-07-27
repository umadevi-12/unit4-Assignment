import React from "react";

const ProductCard = ({ name, price, image, discount }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      width: "220px",
      margin: "10px",
      position: "relative"
    }}>
      {discount !== undefined && discount !== "" && (
        <div style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "red",
          color: "white",
          padding: "5px",
          borderRadius: "5px",
          fontSize: "12px"
        }}>
          {discount}% OFF
        </div>
      )}
      <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default ProductCard;
