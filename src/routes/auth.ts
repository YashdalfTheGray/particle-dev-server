import { Request, Response, NextFunction } from 'express';

import ApiConfig from '../ApiConfig';

interface TokenError {
    error: string;
    error_description: string;
}

function isTokenError(object: any): object is TokenError {
    return 'error_description' in object;
}

const apiConfig: ApiConfig = require(process.argv[1]);

function findToken(req: Request): string | TokenError {
    const noAccessTokenError: TokenError = {
        error: 'invalid_request',
        error_description: 'the access token was not found'
    };

    if (req.get('Authorization')) {
        const [type, token, ...rest] = req.get('Authorization').split(' ') || '';

        if (type !== 'Bearer') {
            return {
                error: 'invalid_request',
                error_description: 'malformed auth header'
            } as TokenError;
        }
        else {
            return token;
        }
    }
    else if (req.method === 'GET') {
        return req.query.access_token || noAccessTokenError;
    }
    else if (req.method === 'POST' && req.get('Content-Type') === 'application/x-www-form-urlencoded') {
        return req.body.access_token || noAccessTokenError;
    }
    else {
        return noAccessTokenError;
    }
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = findToken(req);

    if (isTokenError(token)) {
        res.json(token);
    }
    else if (token !== apiConfig.token) {
        res.json({
            error: "invalid_token",
            error_description: "The access token provided is invalid."
        });
    }
    else {
        next();
    }
};

export default authenticate;

export {
    findToken
};
