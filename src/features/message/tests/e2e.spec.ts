import app from '../../../index'
import supertest from 'supertest'

const request = supertest(app)
const tenSeconds = 10 * 1000
const seventySeconds = 70 * 1000
jest.setTimeout(seventySeconds)

describe('Use cases', () => {
  test('One hit', async () => {
    const userId = '1'
    await request.get('/message')
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
      .then((response:any) => {
        expect(response.body).toMatchObject({ userId, message: 'foobar' })
      })
  })
  test('Five hits', async () => {
    const userId = '2'
    await request.get('/message') // first hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // second hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // third hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // fourth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // fifth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
  })
  test('Six hits', async () => {
    const userId = '3'
    await request.get('/message') // first hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // second hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // third hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // fourth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // fifth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // sixth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(429)
  })
  test('Seven hit after waiting', async () => {
    const userId = '4'
    await request.get('/message') // first hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    setTimeout(async () => {
      await request.get('/message') // seventh hit
        .set('user-id', userId)
        .set({ 'x-mocks': true })
        .expect(200)
    }, tenSeconds)
    await request.get('/message') // second hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // third hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // fourth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // fifth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(200)
    await request.get('/message') // sixth hit
      .set('user-id', userId)
      .set({ 'x-mocks': true })
      .expect(429)
  })
})
