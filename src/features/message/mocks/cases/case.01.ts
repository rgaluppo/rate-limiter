import { IMockConfig } from "../../../../mocks";
import { buildFetchMessage } from "../../../../mocks/builders/message.builder";

/**
 * Case 1: the user '11111' try to get a messege. 
 */
export function case01 (config:IMockConfig) {
    const userId = '11111';
    const path = '/dumbledore/nachoman';

    buildFetchMessage(config.foaasNock, path, userId);
}
