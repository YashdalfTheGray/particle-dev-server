import { Request, Response } from 'express';

const getStatus = (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        devicesFile: !!process.argv[2]
    });
};

export {
    getStatus
};
