import restclient from '../../../helpers/restclient'
import config from 'config'
import { IFoaasConfig } from '../types/config'
import { IFOAASMessage } from '../types/data'
import { recordExternalApiResponse } from '../../../helpers/metrics'
import { performance } from 'perf_hooks'

/**
 * FOAAS (Fuck Off As A Service) API call
 *
 * @returns {IFOAASMessage} a message
 */
export async function fetchMessage (userId:string):Promise<IFOAASMessage> {
  const foaas : IFoaasConfig = config.get('foaas')
  const fullPath = buildFullPath(foaas)
  const restclientConfig = {
    headers: { Accept: 'application/json' },
    params: { user_id: userId }
  }
  try {
    const startTime = performance.now()
    const response = await restclient.get(`${foaas.baseUrl}${fullPath}`, restclientConfig)

    const time = performance.now() - startTime // en milisegundos
    recordExternalApiResponse('success', { api: 'foass', action: foaas.path, statusCode: 200, path: fullPath, time })

    return response.data
  } catch (error: any) {
    if (error.response) { throw new Error(`Apicall fail with status: ${error.response.status}`) }
    if (error.request) { throw new Error('Apical fail: timeout') }

    throw new Error(error.message)
  }
}

/**
 * Given a configuration, this function build a
 * @param {IFoaasConfig} foaas that choose a path and variable values.
 * @returns {string} a full path
 */
function buildFullPath (foaas:IFoaasConfig): string {
  const { path } = foaas
  return path
    .replace(':behavior', foaas.behavior)
    .replace(':company', foaas.company)
    .replace(':from', foaas.from)
    .replace(':name', foaas.name)
    .replace(':noun', foaas.noun)
    .replace(':thing', foaas.thing)
    .replace(':tool', foaas.tool)
}

/**
 * Obtains a message using FOAAS (Fuck Off As A Service) API.
 *
 * @returns {Promise<string>} a messege
 */
export async function getMessage (userId:string): Promise<string> {
  const info = await fetchMessage(userId)
  const { message, subtitle } = info

  return `${message}${subtitle}`
}
