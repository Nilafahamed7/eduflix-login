# Backend Setup Guide

## Environment Variables
Create a `.env` file in the Backend directory with:
```
MONGO_URL=mongodb://127.0.0.1:27017/login
PORT=3000
```

## MongoDB Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named "login"
3. Create a collection named "logindetails"
4. Add test user data:
```javascript
{
  "useremail": "test@example.com",
  "password": "password123"
}
```

## Running the Application
1. Start MongoDB service
2. Run `npm install` in Backend directory
3. Run `npm start` to start the server
4. The server will run on http://localhost:3000

## Frontend Setup
1. Navigate to Frontend/eduflix
2. Run `npm install`
3. Run `npm run dev` to start the frontend
4. The frontend will run on http://localhost:5173

## Testing
- Backend health check: http://localhost:3000
- Frontend: http://localhost:5173 