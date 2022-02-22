import { NextFunction, Request, Response } from 'express'

/**
 * Middleware de autenticación. Valida que el usuario tenga una sesion activa
 */
export function authMiddleware (req: Request, res: Response, next: NextFunction) {
  const userId = req.get('user-id')
  if (!userId) {
    const badSession: Error & { status?: number } = new Error('User not logged!')
    badSession.status = 400
    next(badSession)
  }

  next()
};
