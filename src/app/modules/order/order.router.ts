import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './order.controller';
import { CategoryValidation } from './order.validation';
const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.getAllCategories
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.getSingleCategory
);

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.createCategoryValidation),
  CategoryController.createCategory
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.updateCategoryValidation),
  CategoryController.updateCategory
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory
);

export const CategoryRouter = router;
