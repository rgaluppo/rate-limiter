import express from 'express'
import { messageHandler } from '../../features/message'
import { rateLimiterMiddleware } from '../../middlewares/rateLimiter'

const router = express.Router()

router.use(rateLimiterMiddleware())
router.get('/', messageHandler)

export default router
