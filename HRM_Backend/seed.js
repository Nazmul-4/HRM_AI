const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User'); // Check this import matches your exact path structure

dotenv.config();

const seedUsers = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hrm');
    console.log('Database connection initialized for seeding...');

    // Clear any broken stale entries
    await User.deleteMany();
    console.log('Old user entries cleared.');

    // Mock accounts matching your quick login layouts perfectly
    const mockUsers = [
      {
        email: 'company@example.com',
        password: '12345678',
        role: 'company'
      },
      {
        email: 'hr@example.com',
        password: '12345678',
        role: 'hr'
      },
      {
        email: 'employee@example.com',
        password: '12345678',
        role: 'employee'
      }
    ];

    // Seed into Mongo instance
    await User.create(mockUsers);
    console.log('🎉 Successfully seeded 3 distinct Roles into Database!');
    
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedUsers();