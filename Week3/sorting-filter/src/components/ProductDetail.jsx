import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setData(json.products); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
export default ExampleComponent;