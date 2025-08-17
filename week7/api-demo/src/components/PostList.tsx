import React from "react";
import {Post} from '../types/Post';
import PostItem from "./PostItem";

interface PostListProps{
    posts:Post[];
}


const PostList:React.FC<PostListProps> = ({posts}) =>{
    return(
        <ul style={{listStyle:'none',padding:0}}>
            {posts.map((post) =>(
                <PostItem key = {post.id} post={post} />
            )) }
        </ul>
    )
}
export default PostList;