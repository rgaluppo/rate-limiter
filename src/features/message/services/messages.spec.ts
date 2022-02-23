import restclient from '../../../helpers/restclient'
import { fetchMessage, getMessage } from './messages'

jest.mock('../../../helpers/restclient')
jest.mock('config', () => ({
  get: (key:'restclient'|'foaas') => {
    const mapping = {
      restclient: {
        timeout: 3000
      },
      foaas: {
        baseUrl: 'https://www.foaas.com',
        path: '/dumbledore/:from',
        behavior: '',
        company: '',
        from: 'nachoman',
        language: '',
        name: '',
        noun: '',
        thing: '',
        tool: ''
      }
    }
    return mapping[key]
  }
}))
const mockedRestclient = restclient as jest.Mocked<typeof restclient>

describe('Message services', () => {
  describe('fetchMessage method: Foaas apicall', () => {
    afterAll(() => {
      jest.clearAllMocks()
    })
    test('Successful api response', async () => {
      const body = { message: 'foo', subtitle: 'bar' }
      const response = { data: body }
      mockedRestclient.get.mockResolvedValue(response)

      const result = await fetchMessage('111')
      expect(result).toMatchObject(body)
    })
    test('Bad request', async () => {
      const response = { status: 400 }
      const error: Error & { response?: Object, request?: Object } = new Error('Bad request')
      error.response = response
      mockedRestclient.get.mockRejectedValue(error)

      await expect(fetchMessage('111')).rejects.toThrowError('Apicall fail with status: 400')
    })
    test('Timeout', async () => {
      const request = { path: '' }
      const error: Error & { response?: Object, request?: Object } = new Error('Timeout')
      error.request = request
      mockedRestclient.get.mockRejectedValue(error)

      await expect(fetchMessage('1')).rejects.toThrowError('Apical fail: timeout')
    })
    test('Null pointer exception', async () => {
      const error: Error & { response?: Object, request?: Object } = new Error('Cannot read property "x" of undefined')
      mockedRestclient.get.mockRejectedValue(error)

      await expect(fetchMessage('1')).rejects.toThrowError('Cannot read property "x" of undefined')
    })
  })
  describe('getMessage method', () => {
    afterAll(() => {
      jest.clearAllMocks()
    })
    test('fetchMessage returns a value', async () => {
      const body = { message: 'foo', subtitle: 'bar' }
      const response = { data: body }
      mockedRestclient.get.mockResolvedValue(response)

      const result = await getMessage('1')
      expect(result).toBe('foobar')
    })
    test('fetchMessage raise an error', async () => {
      const response = { status: 400 }
      const error: Error & { response?: Object, request?: Object } = new Error('Bad request')
      error.response = response
      mockedRestclient.get.mockRejectedValue(error)

      await expect(getMessage('1')).rejects.toThrowError('Apicall fail with status: 400')
    })
  })
})
