import { NextFunction, Request, Response } from 'express'
import { CustomError } from '../types/error'

/**
 * Middleware de autenticación. Valida que el usuario tenga una sesion activa
 */
export function authMiddleware (req: Request, res: Response, next: NextFunction) {
  const userId = req.get('user-id')
  if (!userId) {
    const badSession:CustomError = new Error('Invalid params! The user must be logged in.')
    badSession.status = 400
    next(badSession)
  }

  next()
};
