import React from "react";
import { useState } from "react";
const SearchBar = ({onSearch}) => {
    const [input , setInput] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input.trim()){
            onSearch(input)
        }
    };
    return (
        <form onSubmit = {handleSubmit}>
            <input value = {input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Moive title..."/>
            <button type = 'submit' >Search</button>
        </form>
    )
     
}
export default SearchBar;