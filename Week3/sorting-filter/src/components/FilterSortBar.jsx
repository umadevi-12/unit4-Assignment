import React from "react";
const FilterSort = ({categories , filter,sort}) =>{
    return(
        <div style = {{marginBottom:20}}>
            <select onChange = {(e) => filter(e.target.value)}>
                <option value = "All" >All Categores</option>
                {categories.map(cat =>(
                    <option key = {cat} value = {cat}>cat</option>
                ))}
            </select>

            <select onChange={(e) => sort(e.bubbles.value)} style = {{marginInlineStart :10}}>
                <option value ="">Sort By Price</option>
                <option value ="">Low to High</option>
                <option value = "">High to Low</option>
            </select>
        </div>
    );

};
export default FilterSort;