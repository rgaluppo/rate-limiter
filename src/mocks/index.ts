import nock from 'nock'
import config from 'config'
import { IFoaasConfig } from '../features/message/types/config'
import { messageMocks } from '../features/message/mocks'

export interface IMockConfig {
  foaasNock: nock.Scope,
}

const allowUnmocked = process.env.NODE_ENV !== 'test'
const { baseUrl: foaasBaseURL }:IFoaasConfig = config.get('foaas')
const nockConfig:IMockConfig = {
  foaasNock: nock(foaasBaseURL, { allowUnmocked }).persist()
}

export function init () {
  messageMocks(nockConfig)

  console.log('\x1b[36m%s\x1b[0m', 'Mocks initialized.')
};

export function close () {
  if (nock.isActive()) {
    nock.cleanAll()
    console.log('\x1b[36m%s\x1b[0m', 'Mocks ended.')
  }
};
