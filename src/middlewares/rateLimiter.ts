import config from 'config'
import { CustomError } from '../types/error'
import { NextFunction, Request, Response } from 'express'
// import { RedisStore } from '../helpers/stores/redis' // para usar la store de Redis
import { MapStore } from '../helpers/stores/map'
import logger from '../helpers/logger'

/**
 * Middleware limitador de requests
 *
 * @returns a Express middleware
 */
export function rateLimiterMiddleware () {
  const requestLimit:number = config.get('limiter.maximumRate')
  const ttl:number = config.get('limiter.timeWindow')
  // const store = new RedisStore() // para usar la store de Redis
  const store = new MapStore()

  return async (request:Request, response:Response, next:NextFunction) => {
    const key:string = request.get('user-id') ?? request.ip

    try {
      await store.connect()

      const count = await store.increment(key) // si no existe un contador para esa key, lo crea y le asigna el valor 1.
      const isNewEntry = count === 1
      logger.info('count', count)

      if (isNewEntry) { store.expire(key, ttl) } // la primera vez configuro el ttl para esta entrada.
      if (count > requestLimit) { // si supero el límite, lanzo un error.
        const toManyRequests:CustomError = new Error('Too many requests!')
        toManyRequests.status = 429
        await store.disconnect()
        next(toManyRequests)
      }
      await store.disconnect()
      next() // Si estoy dentro del límite, continuo la ejecución
    } catch (e) {
      await store.disconnect()
      next(e)
    }
  }
};
