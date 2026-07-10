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
        const createdCategory = await prisma.category.create({data : {name : body.name , userId : body.userId}})
        res.status(200).json({ createdCategory});
    }else if( method === "DELETE" ){
        const body = req.body;
        if(!body.id) return res.status(400).send("Bad request")
        const deletedCategory = await prisma.category.delete({where : {id : body.id }})
        res.status(200).json({deletedCategory})
    }else if (method === "PUT"){
        const {id , categoryName} = req.body;
        const updatedCategory = await prisma.category.update({where : { id }, data : { name : categoryName}})
        res.status(200).json({updatedCategory})
    }

}
