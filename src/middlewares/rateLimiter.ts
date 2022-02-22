import rateLimit, { Options } from 'express-rate-limit'
import config from 'config'
import { CustomError } from '../types/error'

/**
 * Middleware limitador de requests
 *
 * @returns a Express middleware
 */
export function rateLimiterMiddleware () {
  const limiterConfig:Partial<Options> = {
    windowMs: config.get('limiter.timeWindow'),
    max: config.get('limiter.maximumRate'),
    keyGenerator: (request) => request.get('user-id') ?? request.ip,
    handler: (request, response, next, options) => {
      const toManyRequests:CustomError = new Error(options.message)
      toManyRequests.status = options.statusCode
      next(toManyRequests)
    }
  }
  const apiLimiter = rateLimit(limiterConfig)
  return apiLimiter
};
