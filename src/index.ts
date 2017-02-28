import * as express from 'express';
import * as morgan from 'morgan';
import * as chalk from 'chalk';
import * as dotenv from 'dotenv';

dotenv.config();

import { getDevicesRoot } from './routes/devices';

const app = express();
const appPort = process.env.PORT || process.argv[2] || 8080;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        configFileFound: !!process.env.CONFIG_FILE
    });
});

app.get('/devices', getDevicesRoot);

app.listen(appPort, () => {
    console.log(`Server is now listening at port ${chalk.green(appPort)}...`)
});
