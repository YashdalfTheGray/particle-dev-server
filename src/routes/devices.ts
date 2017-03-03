import { Request, Response, NextFunction } from 'express';

const getDevices = (req: Request, res: Response, next: NextFunction) => {
    if (/^\/devices\//.test(req.path)) {
        res.json({
            requestedPath: req.path
        });
    }
    else {
        next();
    }
};

export {
    getDevices
};
