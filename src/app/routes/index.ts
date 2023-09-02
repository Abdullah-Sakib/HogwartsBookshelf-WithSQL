import express from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { BookRouter } from '../modules/book/book.router';
import { CategoryRouter } from '../modules/category/category.router';
import { UserRouter } from '../modules/user/user.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/users',
    routes: UserRouter,
  },
  {
    path: '/category',
    routes: CategoryRouter,
  },
  {
    path: '/books',
    routes: BookRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
