import rateLimit from 'express-rate-limit'
import config from 'config';

/**
 * Middleware limitador de requests
 * 
 * @returns a Express middleware
 */
export function rateLimiterMiddleware() {
    const apiLimiter = rateLimit({
        windowMs: config.get('limiter.timeWindow'),
        max: config.get('limiter.maximumRate'),
        keyGenerator: (request) => request.get('user-id') ?? request.ip,
    });
    return apiLimiter;
};
