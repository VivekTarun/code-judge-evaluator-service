import { Request, Response } from "express";

export const pingcheck = (_: Request, res: Response) => {
    return res.status(200).json({
        message: "ping check ok"
    });
};