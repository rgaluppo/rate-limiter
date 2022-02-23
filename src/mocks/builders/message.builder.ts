import nock from 'nock/types'

export function buildFetchMessage (foaasNock:nock.Scope, path:string, userId:string) {
  foaasNock.get(path)
    .query({ user_id: userId })
    .reply(200, {
      message: 'foo',
      subtitle: 'bar'
    })
}

export function buildFetchMessageError (foaasNock:nock.Scope, path:string, userId:string) {
  foaasNock.get(path)
    .query({ user_id: userId })
    .reply(500)
}
