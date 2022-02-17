import { NextFunction, Request, Response } from 'express';
import logger from '../helpers/logger';

/**
 * Middleware de errores.
 * Se encarga de:
 *  - disparar logs correspondientes
 *  - responder al cliente cuando sucede un error
 * 
 * @param {Error&{status:number}} error app error instance
 * @param {Request} req ExpressJS request node
 * @param {Response} res ExpressJS response node
 * @param {NextFunction} next ExpressJS function for call next middleware (or error middleware).
 */
export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    const statusCode = error.status || 500;

    logger.error(error.message);
    logger.error(`screen: ${req.baseUrl}${req.path}`);
    logger.error(`status_code: ${statusCode}`);
    logger.error(`stack_trace: ${error.stack}`);

    res.status(statusCode).json({
        error: { msg: error.message }
    });
}

/**
 * Middleware para controlar rutas y/o verbos incorrectos
 * Se encarga de:
 *  - disparar logs correspondientes
 *  - responder al cliente cuando sucede requiere una ruta inexistente
 * 
 * @param {Request} req ExpressJS request node
 * @param {Response} res ExpressJS response node
 */
export function notFoundMiddlware(req: Request, res: Response) {
    logger.warn(`not found screen: ${req.baseUrl}${req.path}`);

    // por seguridad no respondemos nada... es como si no existieramos
    res.status(404).send(); 
}