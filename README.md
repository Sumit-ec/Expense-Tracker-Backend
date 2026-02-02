# Personal Expense Tracker Backend

A robust Node.js backend service built with TypeScript and MongoDB to help users track their monthly spending. This project was developed as part of a backend screening task, focusing on schema design, data consistency via Mongoose hooks, and efficient data aggregation.
 Tech Stack
Language: TypeScript
Framework: Express.js
Database: MongoDB Atlas (Cloud)
ODM: Mongoose
Validation: Joi
Environment: Dotenv

# Project Setup Instructions

1. Prerequisites
Node.js (v16 or higher)
npm or yarn
A MongoDB Atlas account
2. Installation
Clone the repository and install dependencies:
Bash
git clone
cd expense-tracker-backend
npm install
3. Environment Variables
Create a .env file in the root directory and add the following:
Env
PORT=5000
MONGO_URI
4. Running the Project
Development Mode:
Bash
npm run dev
Production Build:
Bash
npm run build
npm start

# Database Hosting Details

This project uses MongoDB Atlas, a fully managed cloud database.
Provider: AWS / Google Cloud (via Atlas)
Configuration: The connection is established using a secure URI stored in environment variables.
Reliability: Ensures that data is persistent and accessible from any environment without requiring a local MongoDB installation.
 API Documentation
1. User Management
Create User
URL: POST /users
Payload:
JSON
{
  "name": "John Doe",
  "email": "john@example.com",
  "monthlyBudget": 2000
}
Get User Details
URL: GET /users/:id
2. Expense Management
Add Expense
URL: POST /expenses
Payload:

JSON
{
  "title": "Monthly Groceries",
  "amount": 150.50,
  "category": "Food",
  "userId": "65bd...user_id",
  "date": "2024-02-01" (optional)
}
Get All User Expenses (Supports Pagination & Filtering)
URL: GET /users/:id/expenses?page=1&limit=10&category=Food
Query Params:
page: (Default: 1)
limit: (Default: 10)
category: Filter by category (e.g., Food, Travel)
3. Analytics
Get Monthly Summary
URL: GET /users/:id/summary
Response Example:
JSON
{
  "success": true,
  "data": {
    "totalSpent": 150.50,
    "remainingBudget": 1849.50,
    "expenseCount": 1
  }
}

# Key Logic & Assumptions

1. Data Integrity (Mongoose Hooks)
Referential Integrity: A pre-save hook is implemented on the Expense schema to verify that the userId provided exists in the database before saving the expense. This prevents orphan records.
Async Validation: The hook uses the modern async/await pattern to handle database lookups efficiently.
2. Aggregation Logic
The Monthly Summary is calculated using a MongoDB Aggregation Pipeline ($match, $group).
Assumption: "Current Month" is calculated based on the server's local time, starting from the 1st of the current month to the 1st of the next month.
3. Validations
Joi Middleware: All incoming requests are validated at the middleware level before reaching the controller.
Rules:
monthlyBudget and amount must be positive numbers.
email must be a valid email format and is unique in the DB.
userId must follow the MongoDB ObjectId format.
4. Assumptions Made
Currency: Amounts are handled as numbers. It is assumed the frontend will handle specific currency symbols.
Deletions: User or Expense deletion was not required for this screening task and thus not implemented.
Timezone: Expenses are stored in UTC by default.

# Folder Structure

Text
src/
 ├── config/      # Database connection setup
 ├── controllers/ # Request handlers & Business logic
 ├── middlewares/ # Joi validation & Global error handler
 ├── models/      # Mongoose Schemas & Hooks
 ├── routes/      # API Route definitions
 ├── utils/       # Custom error classes
 └── validators/  # Joi schema definitions