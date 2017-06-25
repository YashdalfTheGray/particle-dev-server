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

test('findToken finds the right token when added as a query on GET', t => {
    const request = {
        get: (name: string) => null,
        method: 'GET',
        query: {
            access_token: 'test-auth-token'
        }
    };

    const foundToken = findToken(request as Request);

    t.is(foundToken, 'test-auth-token');
});

test('findToken finds the right token when added as in the POST body', t => {
    const request = {
        get: (name: string) => name === 'Content-Type' ? 'application/x-www-form-urlencoded' : null,
        method: 'POST',
        body: {
            access_token: 'test-auth-token'
        }
    };

    const foundToken = findToken(request as Request);

    t.is(foundToken, 'test-auth-token');
});
