import test from 'ava';

import { validate } from './configValidator';

const mockDevice = {
    id: 'stuff',
    name: 'things',
    last_app: 'app',
    connected: false,
    product_id: 23098234092384,
    last_heard: Date.now()
};


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

test('validation passes for config with 0 devices', t => {
    t.is(validate({ token: 'stuff', devices: [] }), true);
});

test('validation passes for config an actual device', t => {
    t.is(validate({ token: 'stuff', devices: [mockDevice] }), true);
});
