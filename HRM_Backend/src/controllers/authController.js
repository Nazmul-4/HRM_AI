const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Helper function to generate a JWT token safely
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user (Usually done by Admin)
// @route   POST /api/auth/register
exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Standardize the role parameter to lowercase to pass schema enum validations smoothly
    const normalizedRole = role ? role.toLowerCase() : 'employee';

    // Create the user record
    const user = await User.create({
      email,
      password,
      role: normalizedRole,
    });

    if (user) {
      // Return a clean composite payload matching enterprise frontend expectation structures
      return res.status(201).json({
        token: generateToken(user._id, user.role),
        user: {
          id: user._id,
          email: user.email,
          role: user.role
        }
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Authenticate a user & get token
// @route   POST /api/auth/login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user exists AND password matches against bcrypt instances
    if (user && (await user.matchPassword(password))) {
      
      // CRITICAL ARCHITECTURE FIX: Format the key-value attributes to 
      // eliminate 'undefined' profile issues inside frontend services
      return res.json({
        token: generateToken(user._id, user.role),
        user: {
          id: user._id,
          email: user.email,
          role: user.role // Emits clean lowercase strings ('hr', 'company', etc.)
        }
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};