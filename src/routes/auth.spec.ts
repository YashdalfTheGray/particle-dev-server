import test from 'ava';
import { Request } from 'express';

import { findToken } from './auth';

test('throws missing token error when there is no token', t => {
    const request = {
        get: (name: string) => null
    };

    const foundToken = findToken(request as Request);

    t.deepEqual(foundToken, {
        error: 'invalid_request',
        error_description: 'the access token was not found'
    });
});

test('findToken finds the right token when in the header', t => {
    const request = {
        get: (name: string) => 'Bearer test-auth-token'
    };

    const foundToken = findToken(request as Request);

    t.is(foundToken, 'test-auth-token');
});

test('findToken errors when there is no token', t => {
    const request = {
        get: (name: string) => null
    };

    const foundToken = findToken(request as Request);

    t.deepEqual(foundToken, {
        error: 'invalid_request',
        error_description: 'the access token was not found'
    });
});

test('findToken errors when the token type is not set', t => {
    const request = {
        get: (name: string) => 'test-auth-token'
    };

    const foundToken = findToken(request as Request);

    t.deepEqual(foundToken, {
        error: 'invalid_request',
        error_description: 'malformed auth header'
    });
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
