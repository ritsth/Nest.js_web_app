import { Metadata } from "next";
import { title } from "process";
import React from "react";


// type Props = {
//     params:{
//         name:string;
//     }
// }

interface User{
    id: number;
    name: string;

}
export const generateMetadata = async({params}: {
    //type of the params(like struct
    params: {
        userId: number,
    }//Don't for get to put promise for in Metadata for async and await         
}): Promise<Metadata> =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const users :User = await res.json();
    // const title = await new Promise((resolve) =>{
    //     setTimeout(() => {
    //         resolve(`${users.name}`);
    //     },100);
    // });
   
    return {
        title:`${users.name}`,
    };
};



const NewUserPage = async(
    {params}: {
        //type of the params(like struct)
        params: {
            userId: number,
        }        
    }

) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const users :User = await res.json();
    if(users.id == 1){
        throw new Error("Dummy error");
    }
    return (
        <div>New User Page , User name: {users.name} </div>
    )
}

export default NewUserPage