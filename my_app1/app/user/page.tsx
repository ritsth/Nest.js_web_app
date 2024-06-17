import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
import AddToCart from "../components/addToCard";

export const generateMetadata = ():Metadata =>{
    return {title: "Users"}
}
// like a struct in c++
interface User{
    _id: string;
    name: string;

}

//Making the whole page dynamic so it has new data
//export const dynamic = "force-dynamic";

const UserPage = async () => {
    //{cache:'no-store'} for disabling cache
    //Default : fetche uses caching
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');

    //my local api to MongoDb database 
    const res = await fetch('http://localhost:3000/api/users',{
        cache: "no-store",
    });


    //by detault in typescript the type of a variable is any like users:any
    //so we can change it by
    const {users} = await res.json();
    // console.log(users);
    return (
        // <Suspense fallback="loading ..."> 
            <>
                <h1>Users</h1>
                <AddToCart/>
                <p>{new Date().toLocaleTimeString()}</p>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Id</th>
                                {/* <th>Id</th> */}
                            </tr>                    
                        </thead>
                        <tbody>
                            {users.map((user:any) => 
                                <tr key={user._id}>
                                    <td >
                                        <Link href={`user/${user._id}`}>
                                            {user.name}                                  
                                        </Link>
                                    </td>
                                    <td>
                                        {user._id}
                                    </td>
                                    {/* <td>
                                        {user.name}
                                    </td> */}
                                </tr>
                            )}                    
                        </tbody>

                    </table>      

                </div>

            </>        
        // </Suspense>

    )
}

export default UserPage