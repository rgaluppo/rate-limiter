import { IMockConfig } from '../../../../mocks'
import { buildFetchMessage } from '../../../../mocks/builders/message.builder'

/**
 * Case 1: the user '1' try to get a messege one time.
 */
export function case01 (config:IMockConfig) {
  const userId = '1'
  const path = '/dumbledore/nachoman'

  buildFetchMessage(config.foaasNock, path, userId)
}
