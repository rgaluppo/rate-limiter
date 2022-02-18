import { NextFunction, Request, Response } from 'express';

/**
 * Middleware de autenticación. Valida que el usuario tenga una sesion activa
 * 
 * @param {Error&{status:number}} error app error instance
 * @param {Request} req ExpressJS request node
 * @param {Response} res ExpressJS response node
 * @param {NextFunction} next ExpressJS function for call next middleware (or error middleware).
 */
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const userId = req.get('user-id');
    if(!userId) {
        const badSession: Error & { status?: number }  = new Error('User not logged!');
        badSession.status = 400;
        next(badSession);
    }

    next();
};