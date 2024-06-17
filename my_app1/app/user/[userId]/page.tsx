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
    const res = await fetch(`http://localhost:3000/api/users/${params.userId}`);
    const {user} = await res.json();
    // const title = await new Promise((resolve) =>{
    //     setTimeout(() => {
    //         resolve(`${users.name}`);
    //     },100);
    // });
   
    return {
        title:`${user.name}`,
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
    const res = await fetch(`http://localhost:3000/api/users/${params.userId}`);
    const {user} = await res.json();
    if(user.id == 1){
        throw new Error("Dummy error");
    }
    return (
        <div>New User Page , User name: {user.name} </div>
    )
}

export default NewUserPage