'use client';
import React, { useState } from "react";


const AddToCart = () => {
    const [title,setTitle] = useState("");

    const submitData = async(e:any) =>{
        e.preventDefault();
        try{
            const res= await fetch('http://localhost:3000/api/cart',{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({title}),
            });
        }catch(error){
            console.log("error: ");
            console.log(error);
        }

    }

    return (
        <div>
            <input onChange={(e)=> {console.log(e.target.value);setTitle(e.target.value);} } type="text" placeholder="data" className="input input-bordered w-full max-w-xs" id="data"/>
            <button className="btn btn-primary" onClick={submitData}>
                Add to card
            </button>
        </div>
    )
}

export default AddToCart