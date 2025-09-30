/* 
 * BACKEND AUTHENTICATION EXAMPLE (Node.js/Express)
 * Save this as a reference for your backend implementation
 */

// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many login attempts, please try again later.',
});

// Secure admin credentials (stored in environment variables)
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME, // e.g., "homeStuco"
  passwordHash: process.env.ADMIN_PASSWORD_HASH, // Hashed password
};

// Admin login endpoint
router.post('/admin/login', loginLimiter, async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    // Check username
    if (username !== ADMIN_CREDENTIALS.username) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, ADMIN_CREDENTIALS.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: 'admin',
        username: username,
        role: 'admin',
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
      },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user: {
        id: 'admin',
        username: username,
        role: 'admin'
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Protected admin routes
router.get('/admin/verify', verifyToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

module.exports = router;

/* 
 * ENVIRONMENT VARIABLES FOR BACKEND (.env file)
 * 
 * ADMIN_USERNAME=homeStuco
 * ADMIN_PASSWORD_HASH=$2b$10$... (generated using bcrypt)
 * JWT_SECRET=your-super-secret-jwt-key-minimum-256-bits
 * DATABASE_URL=your-database-connection
 * 
 * To generate password hash:
 * const bcrypt = require('bcrypt');
 * const hash = await bcrypt.hash('your-password', 10);
 * console.log(hash); // Use this as ADMIN_PASSWORD_HASH
 */
