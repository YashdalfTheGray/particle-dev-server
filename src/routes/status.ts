import { Request, Response } from 'express';

const getStatus = (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        configFileFound: !!process.env.CONFIG_FILE_PATH
    });
};

export {
    getStatus
};
