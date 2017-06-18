import { Request, Response } from 'express';

const getStatus = (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        devicesFileFound: !!process.argv[1]
    });
};

export {
    getStatus
};
