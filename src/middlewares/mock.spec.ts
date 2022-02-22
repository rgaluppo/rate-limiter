import { NextFunction, Request, Response } from 'express'
import { mocksMiddleware } from './mock'

describe('Mock middle', () => {
  const mockResponse: Partial<Response> = { json: jest.fn() }
  const nextFunction: NextFunction = jest.fn()
  it('continue the request', () => {
    const mockRequest = {
      get: jest.fn(name => {
        if (name === 'x-mocks') { return 'true' }
      })
    }
    mocksMiddleware(mockRequest as unknown as Request, mockResponse as Response, nextFunction)
    expect(mockResponse.locals).toMatchObject({ areMocksEnabled: true })
  })
  it('stop the request and go to the error middleware', () => {
    const mockRequest: Partial<Request> = { get: jest.fn() }
    mocksMiddleware(mockRequest as unknown as Request, mockResponse as Response, nextFunction)
    expect(mockResponse.locals).toMatchObject({ areMocksEnabled: false })
  })
})
