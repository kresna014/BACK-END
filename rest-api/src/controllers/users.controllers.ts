import { Request, Response } from "express";
import { IUser } from "../types/users";
import fs from "fs";
import { userInfo } from "os";

export const getUsers = (req: Request, res: Response) => {
  const users: IUser[] = JSON.parse(
    fs.readFileSync("./data/users.json", "utf-8")
  );

  res.status(200).send({
    status: "ok",
    users,
  });
};

export const getUsersId = (req: Request, res: Response) => {
  const users: IUser[] = JSON.parse(
    fs.readFileSync("./data/users.json", "utf-8")
  );
  // console.log(req.params);
  const data = users.find((item) => item.id == +req.params.id);
  if (!data) {
    return res.status(402).send({
      status: "error",
      msg: "user not found!",
    });
  }

  res.status(200).send({
    status: "ok",
    user: data,
  });
};

export const createUser = (req: Request, res: Response) => {
  const users: IUser[] = JSON.parse(
    fs.readFileSync("./data/users.json", "utf-8")
  );
  const id = Math.max(...users.map((item) => item.id)) + 1;
  const newUser = {
    id,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);
  fs.writeFileSync("./data/users.json", JSON.stringify(users), "utf-8");

  console.log(newUser);

  res.status(201).send({
    status: "ok",
    msg: "user created",
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const users: IUser[] = JSON.parse(
    fs.readFileSync("./data/users.json", "utf-8")
  );
  const { id } = req.params;
  fs.writeFileSync("./data/users.json", JSON.stringify(users.filter((user : IUser) => user.id !== Number(id))), "utf-8");
  
  res.status(200).send({
    status: "ok",
    msg: "user delete"
  })
}
