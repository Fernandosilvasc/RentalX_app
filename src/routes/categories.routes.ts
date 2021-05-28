import { Router, Request, Response } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (req: Request, res: Response) => {
    const { file } = req;
    console.log(file);
    return res.send();
  },
);

categoriesRoutes.get('/', (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res);
});

export { categoriesRoutes };
