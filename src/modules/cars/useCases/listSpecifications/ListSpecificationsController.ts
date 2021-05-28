import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listCategoriesUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const specificationsList = this.listCategoriesUseCase.execute();

    return res.json(specificationsList);
  }
}

export { ListSpecificationsController };
