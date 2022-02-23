import { IMockConfig } from '../../../mocks'
import { case01 } from './cases/case.01'
import { case02 } from './cases/case.02'
import { case03 } from './cases/case.03'
import { case04 } from './cases/case.04'

export function messageMocks (config:IMockConfig) {
  case01(config)
  case02(config)
  case03(config)
  case04(config)
}
