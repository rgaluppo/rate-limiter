import { IMockConfig } from "../../../../mocks";
import { buildFetchMessageError } from "../../../../mocks/builders/message.builder";

/**
 * Case 2: the user '99999' try to get a messege and gets an error.
 */
export function case02 (config:IMockConfig) {
    const userId = '99999';
    const path = '/dumbledore/nachoman';

    buildFetchMessageError(config.foaasNock, path, userId);
}
