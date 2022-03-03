import { IStore } from '../../types/store'

export class MapStore implements IStore {
  store: Map<string, number>

  constructor () {
    this.store = new Map()
  }

  async connect () {}

  async disconnect () {}

  async expire (key:string, ttl:number) {
    const ms = ttl * 1000 // conversion a milisegundos
    setTimeout(() => {
      this.store = new Map()
    }, ms)
  }

  async increment (key:string) {
    const value:number = this.store.get(key) ?? 0
    const count = value + 1

    this.store.set(key, count)

    return count
  }

  isConnect () { return true }
}
