import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterSort from "./FilterSortBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data.products);
        setFilter(data.products);

        const allCategories = [...new Set(data.products.map(p => p.category))];
        setCategories(allCategories);
      } catch (error) {
        console.error(error);
        setError(error.message || "Something went wrong");
      }
    };
    fetchData();
  }, []);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilter(products);
    } else {
      setFilter(products.filter(p => p.category === category));
    }
  };


  const handleSort = (order) => {
    const sorted = [...filter].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setFilter(sorted);
  };

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Products</h1>

      <FilterSort categories={categories} onFilter={handleFilter} onSort={handleSort} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filter.map(p => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc", 
              padding: 10,
              margin: 10,
              width: 200,
            }}
          >
            <img src={p.thumbnail} alt={p.title} width="100%" />
            <h4>{p.title}</h4>
            <p>${p.price}</p>

            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
