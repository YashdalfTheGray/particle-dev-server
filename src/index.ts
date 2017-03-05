import * as express from 'express';
import * as morgan from 'morgan';
import * as chalk from 'chalk';
import * as dotenv from 'dotenv';

dotenv.config();

import { handleDeviceRequest } from './routes/devices';
import { getStatus } from './routes/status';

const app = express();
const appPort = process.env.PORT || process.argv[2] || 8080;

app.use(morgan('dev'));
app.use(handleDeviceRequest);

app.get('/', getStatus);

app.listen(appPort, () => {
    console.log(`Server is now listening at port ${chalk.green(appPort)}...`)
});
