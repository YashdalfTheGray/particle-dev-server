import { Request, Response, NextFunction } from 'express';

const getDevices = () => {
    return require(process.cwd() + '/' + process.env.CONFIG_FILE_PATH)
}

const handleDeviceRequest = (req: Request, res: Response, next: NextFunction) => {
    if (/^\/devices\//.test(req.path)) {
        if (!!process.env.CONFIG_FILE_PATH) {
            res.json(getDevices());
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
    handleDeviceRequest
};
