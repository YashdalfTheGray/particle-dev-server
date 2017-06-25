import test from 'ava';

import { validate } from './configValidator';

test('validation fails for empty object', t => {
    t.is(validate({}), false);
});

test('validation fails for an object without the token property', t => {
    t.is(validate({ foo: 'stuff' }), false);
});

test('validation fails for an object without the devices property', t => {
    t.is(validate({ token: 'stuff' }), false);
});

test('validation passes for an object that looks like ApiConfig', t => {
    t.is(validate({ token: 'stuff', devices: [] }), true);
});
