import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";

export const generateMetadata = ():Metadata =>{
    return {title: "Users"}
}
// like a struct in c++
interface User{
    id: number;
    name: string;

}

//Making the whole page dynamic so it has new data
//export const dynamic = "force-dynamic";

const UserPage = async () => {
    //{cache:'no-store'} for disabling cache
    //Default : fetche uses caching
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //by detault in typescript the type of a variable is any like users:any
    //so we can change it by
    const users: User[] = await res.json();

    return (
        <Suspense fallback="loading ..."> 
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
        </Suspense>

    )
}

export default UserPage