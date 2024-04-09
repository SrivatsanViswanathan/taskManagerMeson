import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { createJWT } from '../utils/tokens.js';
import { comparePassword, hashPassword } from '../utils/passwords.js';
import { UnauthenticatedError } from '../errors/customError.js';

// Register User
export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  console.log(req.body);
  const user = await User.create(req.body);
  return res
    .status(StatusCodes.CREATED)
    .json({ message: 'User successfully created' });
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  // JSON Web Token
  const token = createJWT({ userId: user._id });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expired: new Date(Date.now() + oneDay),
  });
  return res.status(StatusCodes.OK).json({ message: 'User logged in' });
};
