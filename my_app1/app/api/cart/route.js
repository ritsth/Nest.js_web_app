import connectMongoDB from "@/lib/mongodb";
import Users from "@/models/user";
import {NextResponse} from "next/server"

export async function POST(request){
    const {title} = await request.json();
    await connectMongoDB();
    await Cart.create({title});
    return NextResponse.json({message: "Cart created"},{status: 201});
}

export async function GET(){
    await connectMongoDB();
    const carts = await Cart.find();
    return NextResponse.json({carts});
}