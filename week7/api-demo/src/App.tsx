import React,{useEffect,useState} from "react";
import {Post} from './types/Post';
import PostList from "./components/PostList";

const App:React.FC = () =>{
  const [posts,setPosts] = useState<Post[]>([]);
  const [loading,setLoaing] = useState<boolean>(true);
  const [error , setError] = useState<string>('');

  useEffect(() =>{
    const fetchPosts = async () =>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
          throw new Error('Failed to fetch posts');
        }
        const data : Post[] = await response.json();
        setPosts(data);
      }
      catch(err){
        setError((err as Error).message);
      }
      finally{
        setLoaing(false);
      }
    };
    fetchPosts();
  },[]);
  if(loading) return <p>Loading posts...</p>;
  if(error) return <p style={{color:'red'}}>Error : {error}</p>

  return(
    <div style={{padding:'20px'}}>
      <h1>Posts</h1>
      <PostList posts = {posts.slice(0,10)}/>
    </div>
  )
}
export default App;