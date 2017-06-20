import test from 'ava';
import { Response } from 'express';

import { getStatus } from './status';

test('status middleware returns a good status when file is found', t => {
    process.argv[1] = 'someFile.js';

    t.plan(2);

    const response = {
        json({ status, devicesFileFound }) {
            t.is(status, 'ok');
            t.is(devicesFileFound, true);
        }
    }

    getStatus(null, response as Response);
});

test('status middleware returns a bad status when file is not found', t => {
    process.argv[1] = null;

    t.plan(2);

    const response = {
        json({ status, devicesFileFound }) {
            t.is(status, 'ok');
            t.is(devicesFileFound, false);
        }
    }

    getStatus(null, response as Response);
});
