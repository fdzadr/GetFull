import connectMongo from "database/conn"
import User from 'model/user'
import { hash } from 'bcryptjs'
import Router from "next/router"
import { createRouter } from "next-connect"
import {id} from "@/pages/api/auth/[...nextauth]"


export default async function handler(req,res){
    connectMongo().catch(error=>res.json({error:"Connection Failed!"}))

    console.log(req.body);
    

    if(req.method === 'POST'){

        if(!req.body)return res.status(404).json({error:"Don't have form data!"});
        const{phonenumber,username,password,cpassword} = req.body

        const checkexisting = await User.findOne({phonenumber});
        if(checkexisting) return res.status(422).json({status:false,message:"User already exist!"});

        const user = await User.create({ phonenumber, username, password, password:await hash(password, 12,), cpassword}//, function(err, data){
          // if(err)return res.status(404).json({err});
          // return res.status(201).json({status:true,user:data})  
        // }
        )

        if (!user) {
          return res.status(400).json({status:false,message:"failed to create user"})
        }

        return res.status(200).json({status:true,message:"user created"})

    }else{
        res.status(500).json({status:false, message:"HTTP method not valid only POST Accepted"})
    }

}
