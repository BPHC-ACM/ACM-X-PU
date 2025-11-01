// POST /api/users/login
// Body: { email: string, password: string }
// Returns: JWT token
import { Router } from 'express';

import {
  googleLogin,
  googleCallback,
  refreshAccessToken,
  getMe,
} from '../controllers/auth.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/google/login', googleLogin);
router.get('/google/callback', googleCallback);
router.post('/refresh', refreshAccessToken);

// Protected route (requires JWT)
router.get('/me', authenticateToken, getMe);

export default router;
