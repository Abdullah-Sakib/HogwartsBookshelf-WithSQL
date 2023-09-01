import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './user.controller';
import { StudentValidation } from './user.validation';
const router = express.Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getUniqueStudentById);

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(StudentValidation.createStudentValidation),
  StudentController.createStudent
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(StudentValidation.updateStudentValidation),
  StudentController.updateStudent
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentController.deleteStudent
);

export const StudentRouter = router;