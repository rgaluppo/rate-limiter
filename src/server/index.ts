import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorMiddleware, notFoundMiddlware } from '../middlewares/error';

export default function (app:any) {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use('*', notFoundMiddlware);
    app.use(errorMiddleware);
};