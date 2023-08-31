import express from 'express';
import { StudentRouter } from '../modules/user/user.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/student',
    routes: StudentRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
