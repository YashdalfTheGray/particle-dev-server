import test from 'ava';
import { Request } from 'express';

import { findToken } from './auth';

test('findToken finds the right token when in the header', t => {
    const request = {
        get: (name: string) => 'Bearer test-auth-token'
    };

    const foundToken = findToken(request as Request);

    t.is(foundToken, 'test-auth-token');
});
