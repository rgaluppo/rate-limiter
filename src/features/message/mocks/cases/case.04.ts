import { IMockConfig } from '../../../../mocks'
import { buildFetchMessage } from '../../../../mocks/builders/message.builder'

/**
 * Case 4: the user '4' try to get a messege six times; then wait 10 seconds and try again.
 */
export function case04 (config:IMockConfig) {
  const userId = '4'
  const path = '/dumbledore/nachoman'

  buildFetchMessage(config.foaasNock, path, userId)
}
