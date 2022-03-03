export interface IStore {
    connect: () => Promise<void>,
    disconnect: () => Promise<void>,
    expire: (key:string, ttl:number) => Promise<void>,
    increment: (key:string) => Promise<number>,
    isConnect: () => boolean,
}
