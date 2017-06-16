#!/usr/bin/env node

import * as express from 'express';
import * as morgan from 'morgan';
import * as chalk from 'chalk';

import { getStatus } from './routes/status';
import { authenticate } from './routes/auth';

const app = express();
const appPort = process.env.PORT || process.argv[2] || 8080;
const appRouter = express.Router();

app.use(morgan('dev'));

appRouter.get('/devices', authenticate, (req, res) => res.json({ foo: 'test', bar: true }));

app.get('/', getStatus);
app.use('/v1', appRouter);

app.listen(appPort, () => {
    console.log(`Server is now listening at port ${chalk.green(appPort)}...`)
});
