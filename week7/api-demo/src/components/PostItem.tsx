import React from "react";
import {Post} from '../types/Post';

interface PostItemProps{
    post:Post;
}

const PostItem : React.FC<PostItemProps> = ({post}) =>{
    return(
        <li style={{marginBottom:'20px',padding:'10px',border:'1px solid pink', borderRadius:'8px'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
    )
}
export default PostItem;