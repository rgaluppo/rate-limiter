import { IModel } from '../types/model'

export function buildSignature (userId:string, message:string): IModel {
  return { userId, message }
}
