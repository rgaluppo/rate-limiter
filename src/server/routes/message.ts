import express from 'express'
import { messageHandler } from '../../features/message'

const router = express.Router()
router.get('/', messageHandler)

export default router
