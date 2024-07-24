import fs from "fs";
import { IExpense } from "../type";
import { NextFunction, Request, Response } from "express";

export const checkId = (req: Request, res: Response, next: NextFunction) => {
  const data: IExpense[] = JSON.parse(
    fs.readFileSync("./src/data/expense.json", "utf-8")
  );
  const expense = data.find((item) => item.id == +req.params.id);

  if (expense) {
    next();
  } else {
    return res.status(404).send({
      status: "error",
      msg: "expense not found",
    });
  }
};

export const checkBody = (req: Request, res: Response, next: NextFunction) => {
  const { title, nominal, type, category, date } = req.body;

  if (title && nominal && type && category && date) {
    next();
  } else {
    return res.status(404).send({
      status: "error",
      msg: "Data Tidak Lengkap",
    });
  }
};

