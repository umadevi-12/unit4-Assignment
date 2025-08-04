import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

const PostDetails = () =>{
    const {id} = useParams();
    const [post,setPost] = useState(null);

    useEffect (()=>{
        const  fetchPost  = async () =>{
            try{
                const response = await axios.get(`https://dummyjson.com/posts/${id}`);
                setPost(response.data);
            }catch(error){
               console.log('Error fetching post :' , error);
            }
        }
        fetchPost();
    },[id]);

    if(!post)
        return <div>Loading...</div>;
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <strong>Tags:</strong>

            <ul>
                {post.tags.map((tag,idx) =>(
                    <li key = {idx}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}
export default PostDetails;