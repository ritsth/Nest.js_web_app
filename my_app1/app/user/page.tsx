import React from "react";

// like a struct in c++
interface User{
    id: number;
    name: string;

}

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //by detault in typescript the type of a variable is any like users:any
    //so we can change it by
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}> {user.name}</li>)}
            </ul>
        </>
    )
}

export default UserPage