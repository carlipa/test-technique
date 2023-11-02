import { Request, Response } from "express";

import moviesServices from "../services/moviesServices";

const moviesController = {
  getAll: (req: Request, res: Response) => {
    const dummyString: string = moviesServices.getDummyString();
    return res.json({ movies: dummyString });
  },
};

export default moviesController;
