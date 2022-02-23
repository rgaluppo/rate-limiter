import { NextFunction, Request, Response } from 'express'
import { authMiddleware } from './auth'

describe('Auth middle', () => {
  const mockResponse: Partial<Response> = { json: jest.fn() }
  const nextFunction: NextFunction = jest.fn()
  it('continue the request', () => {
    const mockRequest = {
      get: jest.fn(name => {
        if (name === 'user-id') { return '1111' }
      })
    }
    authMiddleware(mockRequest as unknown as Request, mockResponse as Response, nextFunction)
    expect(nextFunction).toHaveBeenCalledWith()
  })
  it('stop the request and go to the error middleware', () => {
    const mockRequest: Partial<Request> = { get: jest.fn() }
    authMiddleware(mockRequest as unknown as Request, mockResponse as Response, nextFunction)
    expect(nextFunction).toHaveBeenCalledWith(new Error('Error: Invalid params! The user must be logged in.'))
  })
})
