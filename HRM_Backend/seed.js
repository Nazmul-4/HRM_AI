const mongoose = require("mongoose");
const dotenv = require("dotenv");

// IMPORTANT: match your real file name (lowercase user.js)
const User = require("./src/models/user");

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connection initialized for seeding...");

    await User.deleteMany();
    console.log("Old user entries cleared.");

    const targetAccounts = [
      {
        name: "Admin User",
        email: "company@example.com",
        password: "12345678",
        role: "admin",
      },
      {
        name: "HR User",
        email: "hr@example.com",
        password: "12345678",
        role: "hr",
      },
      {
        name: "Employee User",
        email: "employee@example.com",
        password: "12345678",
        role: "employee",
      },
    ];

    await User.create(targetAccounts);

    console.log("Successfully seeded Admin, HR, Employee!");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedUsers();