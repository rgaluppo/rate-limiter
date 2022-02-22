import { NextFunction, Request, Response } from 'express'
import { init, close } from '../mocks'

export function mocksMiddleware (req: Request, res: Response, next: NextFunction) {
  const userId = req.get('x-mocks')
  const areMocksEnabledFlag = Boolean(userId)

  if (areMocksEnabledFlag) {
    init()
  } else {
    close()
  }

  res.locals = Object.assign({}, res.locals, { areMocksEnabled: areMocksEnabledFlag })
  next()
}
