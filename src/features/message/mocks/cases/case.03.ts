import { IMockConfig } from '../../../../mocks'
import { buildFetchMessage } from '../../../../mocks/builders/message.builder'

/**
 * Case 3: the user '3' try to get a messege six times.
 */
export function case03 (config:IMockConfig) {
  const userId = '3'
  const path = '/dumbledore/nachoman'

  buildFetchMessage(config.foaasNock, path, userId)
}
