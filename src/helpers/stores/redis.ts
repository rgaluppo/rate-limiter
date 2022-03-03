import { IStore } from '../../types/store'
import { createClient } from 'redis'

export class RedisStore implements IStore {
  store: any

  constructor () {
    this.store = createClient()
  }

  async connect () {
    await this.store.connect()
  }

  async disconnect () {
    if (this.isConnect()) { await this.store.quit() }
  }

  async expire (key:string, ttl:number) {
    await this.store.expire(key, ttl)
  }

  async increment (key:string) {
    const count:number = await this.store.incr(key)
    return count
  }

  isConnect () {
    return this.store.isOpen
  }
}
