const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');

// Route Imports
const authRoutes = require('./src/routes/authRoutes');

dotenv.config();

// Initialize Database Connection
connectDB();

const app = express();

// Global Middleware Config
app.use(express.json());

// Robust CORS policy allowing the Next.js development server access
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Mount API Route Endpoints
app.use('/api/auth', authRoutes);

// Base Diagnostic Route
app.get('/', (req, res) => {
  res.send('HRM Backend Running');
});

// Explicit Port Binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server executing successfully on port ${PORT}`);
});