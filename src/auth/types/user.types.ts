/* eslint-disable prettier/prettier */
export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
  googleId: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
}
