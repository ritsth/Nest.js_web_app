import React from "react";

interface User{
    id: number;
    name: string;

}

const NewUserPage = async(
    {params}: {
        //type of the params(like struct)
        params: {
            userId: number,
        }        
    }

) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const users :User[] = await res.json();

    return (
        <div>New User Page , User name: {users.name} </div>
    )
}

export default NewUserPage