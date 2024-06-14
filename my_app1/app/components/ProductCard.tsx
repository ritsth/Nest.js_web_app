import React from "react";
import AddToCart from "./addToCard";
import styles from './css/ProductCard.module.css';
import { Interface } from "readline";

interface Post{
    title: string,
    body: string
}

const ProductCard = async () => {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();
    return (
        <div className="">
            <AddToCart/>
            <ul>
                {posts.map(post => <li> {post.title}</li>)}                
            </ul>

        </div>
    )
}

export default ProductCard