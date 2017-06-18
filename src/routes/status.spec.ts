import test from 'ava';
import MockExpressResponse from 'mock-express-response';
import { Response } from 'express';

import { getStatus } from './status';

test('status middleware returns a good status when file is found', t => {
    const response = new MockExpressResponse();
    process.argv[1] = 'someFile.js';

    getStatus(null, response);

    response._getJSON();
});
