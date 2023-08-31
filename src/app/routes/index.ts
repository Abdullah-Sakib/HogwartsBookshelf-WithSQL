import express from 'express';
import { StudentRouter } from '../modules/student/student.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/student',
    routes: StudentRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
