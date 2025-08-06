import React, { useEffect ,useState,useRef} from 'react';
import './App.css';

const App = () =>{
  const currentPage = useRef(1);
  const [characters , setCharacters] = useState([]);
  const [totalPages , setTotalPages] = useState(1);

 const fetchChar = async (page = 1) =>{
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  const res = await response.json();
  setCharacters(res.results);
  setTotalPages(res.info.pages)
 };
 
 useEffect (() =>{
  fetchChar(currentPage.current);
 },[]);


 const handlePageChange = (page) =>{
  currentPage.current = page;
  fetchChar(page)
 };

 return (
  <div className="App">
    <h1>Rick and Morty Characters</h1>
    <div className="grid">
      {characters.map((char) =>(
        <div key = {char.id} className="card">
          <img src = {char.image} alt = {char.name}/>
          <p>{char.name}</p>
        </div>
      ))}
  </div>

  <div className="pagination">
    {(() =>{
      const pages = [];
      for(let i=1;i<= totalPages;i++){
        pages.push(i);
      }
      return pages.map((page) =>(
        <button key = {page} onClick={() => handlePageChange(page)}
        className={page === currentPage.current ? "active" : ""}>
          {page}
        </button>
      ));
    })()}
    </div>
  </div>
 )
}
export default App;