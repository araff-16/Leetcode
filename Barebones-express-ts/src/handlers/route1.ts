import { Request, Response } from "express";
// import { client } from "../db";
import { Route1DTO } from "../dtos/route1dto";

// const db = client.db("mydb");

// export const route1Getfunction = async (req: Request, res: Response) => {
//   const data = await client.db("rifugio-booker").collection("rifugio").find().toArray();
//   console.log(data);
//   res.status(200).send(data);
// };

export const route1Getfunction2 = async (req: Request, res: Response) => {
  res.send([]);
};

// export const route1Postfunction = async (req: Request<{}, {}, Route1DTO>, res: Response<{}>) => {
//   console.log(req.body.a);
//   const data = await client.db("rifugio-booker").collection("rifugio").insertOne({});
//   console.log(data);
//   res.status(201).send(data);
// };
