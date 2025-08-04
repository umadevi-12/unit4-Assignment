import React,{useEffect,useState} from "react";
function Data(){
    const [title,setTitle] = useState([]);
    const[error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setTitle(data.map(post => post.title))
            }
            catch(error){
                console.log('Error  fetching ',err);
                setError('failed to load data')
            }
        };
        fetchData();
    },[]);

    return(
        <div style={{padding:'20px'}}>
            <h1>Fetched Titles</h1>
            {error && <p style = {{color :'red'}} >{error}</p>}
            <ul>
                {titles.map((title,idx) =>(
                    <li key = {idx} >{title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Data;