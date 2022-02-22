import logger from './logger'

export type InternalApiResponseType = 'success'|'error'|'error_unhandled';
export interface IInternalApiResponseExtraInfo {
    statusCode:number,
    path:string,
    redirect:boolean,
    redirectUrl:string,
}
export type ExternalApiResponseType = 'success'|'error';
export interface IExternalApiResponseExtraInfo {
    statusCode:number,
    path:string,
    api:string,
    action:string,
    time:number,
}

/**
 * Simulate a datadog increment
 *
 * @param {string} metricName The metric's name.
 * @param {Array<string>} customTags They are like: ['key:value', 'key2:value2'].
 */
export function datadogRecordIncrement (metricName:string, customTags:string[]) {
  logger.info('METRIC INCREMENT >>', metricName, ...customTags)
}

/**
 * Simulate a datadog histogram
 *
 * @param {string} metricName The metric's name.
 * @param {number} time API response time in miliseconds
 * @param {Array<string>} customTags They are like: ['key:value', 'key2:value2'].
 */
function datadogRecordHistogram (metricName:string, time:number, customTags:string[]) {
  logger.info('METRIC HISTOGRAM INCREMENT >>', metricName, time, ...customTags)
}

/**
 * A metric that indicates the server responses.
 *
 * @param {InternalApiResponseType} type Indicates the type of the response.
 * @param {IInternalApiResponseExtraInfo} extraInfo Important info for metric propuses.
 */
export function datadogRecordInternalApiResponse (
  type:InternalApiResponseType,
  { statusCode = 200, path = '', redirect = false, redirectUrl = '' }:IInternalApiResponseExtraInfo
) {
  const [withoutQueryParams] = redirectUrl.split('?')
  const tags = [
        `status:${statusCode}`,
        `path:${path}`,
        `type:${type}`,
        `redirect:${redirect}`,
        `redirect_url:${withoutQueryParams}`
  ]
  datadogRecordIncrement('internal.api.response', tags)
}

/**
 * A metric that indicates the dependencies responses.
 *
 * @param {ExternalApiResponseType} type Indicates the type of the response.
 * @param {IExternalApiResponseExtraInfo} extraInfo Important info for metric propuses.
 */
export function datadogRecordExternalApiResponse (
  type:ExternalApiResponseType,
  { api, action, path, statusCode, time }:IExternalApiResponseExtraInfo
) {
  const tags = [
        `api:${api}`,
        `action:${action}`,
        `path:${path}`,
        `statuscode:${statusCode}`,
        `type:${type}`
  ]

  datadogRecordHistogram('external.api.response', time, tags)
}
