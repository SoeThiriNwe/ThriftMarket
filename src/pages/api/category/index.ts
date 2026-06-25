// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const method = "POST";
    if(method === "POST"){
        const body = req.body;
        const createdCategory = await prisma.category.create({data : {name : body.name , userId : body.userId}})
        res.status(200).json({ createdCategory});

    }

  res.status(200).json({ name: "John Doe" });
}
