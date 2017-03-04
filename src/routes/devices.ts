import { Request, Response, NextFunction } from 'express';

const getDevices = (req: Request, res: Response, next: NextFunction) => {
    if (/^\/devices\//.test(req.path)) {
        if (!!process.env.CONFIG_FILE_PATH) {
            res.json(require(process.cwd() + '/' + process.env.CONFIG_FILE_PATH));
        }
        else {
            res.json({
                requestedPath: req.path
            });
        }
    }
    else {
        next();
    }
};

export {
    getDevices
};
