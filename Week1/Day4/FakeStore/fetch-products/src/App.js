import { useState } from "react";

function App(){
  const [loading , setLoading] = useState(false);
  const [error,setError] = useState(null);

  const fetchProducts = async ()=>{
    setLoading(true);
    setError(null);

    try{
      const reponse = await fetch('https://fakestoreapi.com/products');
      if(!reponse.ok){
        throw new Error(`HTTP error ! status : ${reponse.status}`);

      }
      const data = await reponse.json();
      console.log('Fetched Products' ,data);
    }
    catch(error){
      console.log("fetch error" ,error)
      setError('failed to fetch  products.please try again');
    }
    finally{
      setLoading(false);
    }
  };
  return (
    <div style = {{textAlign:'center',marginTop:'2px'}}>
      <h1>Product Fetcher</h1>
      <button onClick={fetchProducts}>Fetch Products</button>

      {loading && <p>Loading...</p>}
      {error && <p style = {{color :'pink' }}>{error}</p>}
    </div>
  )
}
export default App;