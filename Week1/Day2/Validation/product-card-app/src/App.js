import React, { useState } from "react";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "", discount: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) newErrors.price = "Price must be a positive number.";
    if (!form.image.includes("http")) newErrors.image = "Image must be a valid URL.";
    if (form.discount) {
      const discount = Number(form.discount);
      if (isNaN(discount) || discount < 0 || discount > 100) {
        newErrors.discount = "Discount must be between 0 and 100.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setProducts([...products, { ...form }]);
      setForm({ name: "", price: "", image: "", discount: "" });
      setErrors({});
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <input type="text" name="price" placeholder="Product Price" value={form.price} onChange={handleChange} />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>
        <div>
          <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
          {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
        </div>
        <div>
          <input type="text" name="discount" placeholder="Discount % (optional)" value={form.discount} onChange={handleChange} />
          {errors.discount && <p style={{ color: "red" }}>{errors.discount}</p>}
        </div>
        <button type="submit">Add Product</button>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((prod, index) => (
          <ProductCard
            key={index}
            name={prod.name}
            price={prod.price}
            image={prod.image}
            discount={prod.discount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
