import { Request, Response } from 'express';
import getHubList from '../../services/hub/hubService';

const getHub = async (req: Request, res: Response) => {
  const hubs = await getHubList();
  res.json({
    hubs
  });
};

export default {
    getHub,
};
