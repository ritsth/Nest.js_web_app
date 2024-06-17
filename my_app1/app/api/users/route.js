import connectMongoDB from "@/lib/mongodb";
import Users from "@/models/user";
import {NextResponse} from "next/server"


export async function POST(request){
    const {name} = await request.json();
    await connectMongoDB();
    await Users.create({name});
    return NextResponse.json({message: "User created"},{status: 201});
}

export async function GET(){
    await connectMongoDB();
    const users = await Users.find();
    return NextResponse.json({users});
}

