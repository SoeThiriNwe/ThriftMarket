// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  const method = req.method;

  if(method === "POST"){
    const body = req.body;
    if(!body.name || !body.email) return res.status(400).send("Bad request")   
       
    const foundUserInfo = await  prisma.user.findUnique({where : {email : body.email}})
    if(foundUserInfo) {
      const retrieveCategories = await prisma.category.findMany({where : {userId : foundUserInfo.id}})
      return res.status(200).json({ createdUserInfo : foundUserInfo , retrieveCategories  })
    } else {
      const createdUserInfo =  await prisma.user.create({data : {name : body.name , email : body.email }})
      return res.status(200).json({ createdUserInfo  , retrieveCategories : [] })
    }
    
  }

  
}
