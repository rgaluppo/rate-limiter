import { NextFunction, Request, Response } from 'express'
import logger from '../helpers/logger'
import { datadogRecordInternalApiResponse, IInternalApiResponseExtraInfo, InternalApiResponseType } from '../helpers/metrics'

/**
 * Middleware de errores.
 * Se encarga de:
 *  - disparar logs correspondientes
 *  - responder al cliente cuando sucede un error
 *
 */
export function errorMiddleware (error: any, req: Request, res: Response, next: NextFunction) {
  const statusCode = error.status || 500
  const type: InternalApiResponseType = error.status ? 'error' : 'error_unhandled'

  logger.error(error.message)
  logger.error(`screen: ${req.baseUrl}${req.path}`)
  logger.error(`status_code: ${statusCode}`)
  logger.error(`stack_trace: ${error.stack}`)
  const extraInfo: IInternalApiResponseExtraInfo = {
    statusCode: statusCode,
    path: req.path.toString(),
    redirect: false,
    redirectUrl: ''
  }
  datadogRecordInternalApiResponse(type, extraInfo)

  res.status(statusCode).json({
    error: { msg: error.message }
  })
}

/**
 * Middleware para controlar rutas y/o verbos incorrectos
 * Se encarga de:
 *  - disparar logs correspondientes
 *  - responder al cliente cuando sucede requiere una ruta inexistente
 *
 */
export function notFoundMiddlware (req: Request, res: Response) {
  logger.warn(`not found screen: ${req.baseUrl}${req.path}`)

  // por seguridad no respondemos nada... es como si no existieramos
  res.status(404).send()
}
