import express from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
