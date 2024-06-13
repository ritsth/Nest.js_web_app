import Link from "next/link";
import React from "react";

// like a struct in c++
interface User{
    id: number;
    name: string;

}

const UserPage = async () => {
    //{cache:'no-store'} for disabling cache
    //Default : fetche uses caching
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //by detault in typescript the type of a variable is any like users:any
    //so we can change it by
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Id</th>
                        </tr>                    
                    </thead>
                    <tbody>
                    {users.map(user => 
                        <tr key={user.id}>
                            <td >
                                <Link href={`user/${user.id}`}>
                                    {user.name}                                  
                                </Link>
                            </td>
                            <td>
                                {user.id}
                            </td>
                            <td>
                                {user.name}
                            </td>
                        </tr>
                    )}                    
                    </tbody>

                </table>                
            </div>

        </>
    )
}

export default UserPage