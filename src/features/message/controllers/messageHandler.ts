import { NextFunction, Request, Response } from 'express'
import { getMessage } from '../services/messages'
import { recordInternalApiResponse, IInternalApiResponseExtraInfo } from '../../../helpers/metrics'
import { buildSignature } from '../services/signature'

export async function messageHandler (req:Request, res:Response, next:NextFunction) {
  try {
    const userId = req.get('user-id') ?? 'unknown'
    const message = await getMessage(userId)
    const signature = buildSignature(userId, message)

    const extraInfo: IInternalApiResponseExtraInfo = {
      statusCode: 200,
      path: req.path.toString(),
      redirect: false,
      redirectUrl: ''
    }
    recordInternalApiResponse('success', extraInfo)

    res.json(signature)
  } catch (error) {
    next(error)
  }
}
