/* eslint-disable prettier/prettier */
import * as jwt from 'jsonwebtoken';

import { config } from '../config/env.config';
import { JWTPayload } from '../types/user.types';

export const generateAccessToken = (payload: JWTPayload): string => {
  return jwt.sign(payload as object, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });
};

export const generateRefreshToken = (payload: JWTPayload): string => {
  return jwt.sign(payload as object, config.jwtRefreshSecret, {
    expiresIn: config.jwtRefreshExpiresIn,
  });
};

export const verifyAccessToken = (token: string): JWTPayload => {
  return jwt.verify(token, config.jwtSecret) as JWTPayload;
};

export const verifyRefreshToken = (token: string): JWTPayload => {
  return jwt.verify(token, config.jwtRefreshSecret) as JWTPayload;
};
