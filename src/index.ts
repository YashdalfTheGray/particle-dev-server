import * as express from 'express';
import * as morgan from 'morgan';
import * as chalk from 'chalk';

const app = express();
const appPort = process.env.PORT || process.argv[2] || 8080;

app.get('*', (req, res) => {
    res.json({
        status: 'ok'
    });
});

app.listen(appPort, () => {
    console.log(`Server is now listening at port ${chalk.green(appPort)}...`)
});
