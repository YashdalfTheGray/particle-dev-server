import { Request, Response } from 'express';

const getDevicesRoot = (req: Request, res: Response) => {
    res.json(req.path);
};

export {
    getDevicesRoot
};
