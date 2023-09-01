import { User } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const SignUp: RequestHandler = catchAsync(async (req, res) => {
  const result = await AuthService.SignUp(req.body);

  sendResponse<User>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student created successfully',
    data: result,
  });
});

export const AuthController = {
  SignUp,
};
