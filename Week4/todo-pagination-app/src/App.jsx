import React, {useEffect,useState,useRef}from "react";
import './App.css';

const App = () =>{
  const[todos , setTodos] = useState([]);
  const[currentpage , setCurrentpage] = useState(1);
  const perPage = 10;

  useEffect(() =>{
    const fetchTodos = async () =>{
      const renpose = await fetch('https://jsonplaceholder.typicode.com/todos');
      const res = await renpose.json();
      setTodos(res);
    };
    fetchTodos()
  },[]);

  const totalPages = Math.ceil(todos.length/perPage);

  const handlePageChange = (page) =>{
    setCurrentpage(page);
  };

  const nextPage = () =>{
    if(currentpage < totalPages){
      setCurrentpage(currentpage + 1)
    }
  };

  const prevPage = () =>{
    if(currentpage > 1){
        setCurrentpage(currentpage - 1)
    }
  };

  const startIndex = (currentpage - 1) * perPage;
  const currentods = todos.slice(startIndex,startIndex + perPage);

  return(
    <div className="App">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {currentods.map((todos) =>(
          <li key = {todos.id}>
            <strong>{todos.id}</strong> {todos.title}
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={prevPage} disabled = {currentpage === 1}>Previous</button>
        {(() =>{
          const pages = [];
          for(let i=1;i<=totalPages;i++){
            pages.push(
            <button key = {i} onClick={() => handlePageChange(i)}
            className={currentpage === i ? "active" : ""}>{i}</button>
            );
          }
          return pages;
        })()}
        <button onClick={nextPage} disabled = {currentpage === totalPages}>
          Next
        </button>
      </div>

    </div>
  )
}
export default App;