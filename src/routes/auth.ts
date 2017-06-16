import { Request, Response, NextFunction } from 'express';

import ApiConfig from '../ApiConfig';

const apiConfig: ApiConfig = require(process.argv[1]);

function findToken(req: Request): string | null {
    if (req.get('Authorization')) {
        const [type, token, ...rest] = req.get('Authorization').split(' ');

        if (rest.length !== 0) {
            return null;
        }
        else if (type !== 'Bearer') {
            return null;
        }
        else {
            return token;
        }
    }
    else if (req.method === 'GET') {
        return req.query.access_token || null;
    }
    else if (req.method === 'POST' && req.get('Content-Type') === 'application/x-www-form-urlencoded') {
        return req.body.access_token || null;
    }
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(200);
};

export {
    authenticate
};
