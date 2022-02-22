import { NextFunction, Request, Response } from 'express'
import { getMessage } from '../services/messages'
import logger from '../../../helpers/logger'
import { datadogRecordInternalApiResponse, IInternalApiResponseExtraInfo } from '../../../helpers/metrics'
import { buildSignature } from '../services/signature'

export async function messageHandler (req:Request, res:Response, next:NextFunction) {
  try {
    const userId = req.get('user-id') ?? 'unknown'
    const message = await getMessage()
    const signature = buildSignature(userId, message)

    logger.info('message handler: ', JSON.stringify(signature))
    const extraInfo: IInternalApiResponseExtraInfo = {
      statusCode: 200,
      path: req.path.toString(),
      redirect: false,
      redirectUrl: ''
    }
    datadogRecordInternalApiResponse('success', extraInfo)

    res.json(signature)
  } catch (error) {
    next(error)
  }
}
