import { IMockConfig } from '../../../mocks'
import { case01 } from './cases/case.01'
import { case02 } from './cases/case.02'

export function messageMocks (config:IMockConfig) {
  case01(config)
  case02(config)
}
