import { useEffect,useState } from "react";
import axios from "axios";

const Home = () =>{
    const [data,setData] = useState([]);


    useEffect (() =>{
        const fetchData = async () =>{
            try{
                const response = await  axios.get('https://dummyjson.com/posts');
                setData(response.data.posts);
            }catch(error){
                console.log('Error fetching data:',error)
            }
        };
        fetchData();
    } , []);

    return (
        <div>
            <h1>Data:</h1>
            <ul>
                {data.map(post =>(
                    <li key = {post.id}>{post.title}</li>
                ))}
            </ul>
           
        </div>
    )
}
export default Home;