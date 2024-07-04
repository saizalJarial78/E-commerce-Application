# E-commerce-Application
Breif description of my project (E-Commerce Application)

1.Prerequisites
Node.js installed
MongoDB installed locally or connection URI for MongoDB Atlas
2.Installation
bash
Copy code
# Clone the repository
git clone <repository-url>
cd <project-folder>/backend
npm install

cd ../frontend
npm install
3.Setup Environment Variables
Create a .env file in the backend directory:
plaintext
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4.Running the App
bash
Copy code
# Start the backend server
cd backend
npm start

# Start the frontend development server
cd ../frontend
npm start
5.Usage
Open your browser and go to http://localhost:3000 to see the React frontend.
Backend API is accessible at http://localhost:5000.
Folder Structure
bash
Copy code
/backend
  /controllers
  /models
  /routes
  /middlewares
  config.js
  server.js

/frontend
  /public
  /src
  App.js
  index.js
API Endpoints
User Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Authenticate user and return JWT token.
Product Management
GET /api/products: Retrieve all products.
GET /api/products/:id: Retrieve a specific product by ID.
POST /api/products: Add a new product (admin only).
PUT /api/products/:id: Update an existing product (admin only).
DELETE /api/products/:id: Delete a product (admin only).
Shopping Cart
GET /api/cart: Retrieve user's shopping cart.
POST /api/cart: Add an item to the shopping cart.
DELETE /api/cart/:id: Remove an item from the shopping cart.
Technologies Used
Node.js, Express.js
MongoDB (mongoose)
React.js, Redux
