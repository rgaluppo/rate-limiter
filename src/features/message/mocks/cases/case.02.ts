import { IMockConfig } from '../../../../mocks'
import { buildFetchMessage } from '../../../../mocks/builders/message.builder'

/**
 * Case 2: the user '2' try to get a messege five times.
 */
export function case02 (config:IMockConfig) {
  const userId = '2'
  const path = '/dumbledore/nachoman'

  buildFetchMessage(config.foaasNock, path, userId)
}
