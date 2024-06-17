import connectMongoDB from "@/lib/mongodb";
import Users from "@/models/user";
import {NextResponse} from "next/server"

//all the api which needs the id
// like PUT 

export async function GET(request,{params}){
    const {id} =  params;
    await connectMongoDB();
    const user = await Users.findOne({_id:id});
    return NextResponse.json({user},{status: 200});
}