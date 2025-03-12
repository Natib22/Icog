# Task1-Notes

## 📌 Project Overview
Task1-Notes is a simple note-taking API built using Express.js. The API allows users to register and create notes, which are stored in a JSON file. Users can also retrieve their past notes.

## 📁 Folder Structure
```
Task1-Notes/
│── Domain/         
│   ├── user.js 
│   ├── note.js
│── Repository/         
│   ├── userRepository.js  
│   ├── noteRepository.js
│   ├── database.json 
│── Controllers/       # Contains the logic for handling API requests
│   ├── userController.js  # Handles user-related API requests
│── Routes/            # Defines the routing for the application
│   ├── userRoutes.js  # Defines the routes related to users and notes
│── Usecases/          # Contains the use cases (business logic)
│   ├── userUsecase.js  # Logic for user registration
│   ├── noteUsecase.js  # Logic for note creation and retrieval
│── server.js          # Main entry point for the Express app
│── README.md          # Project documentation
```

## 🔧 How It Works
1. **Controllers** handle incoming HTTP requests, interact with the use cases, and send back the appropriate responses.
2. **Routes** define the endpoints and connect the controllers to the HTTP methods.
3. **Usecases** contain the business logic and interact with the data layer.
4. **Data** stores the users and notes information in a simple JSON file.

## 🚀 API Endpoints

### **User Registration**
- **Endpoint:** `POST /register`
- **Request Body:**
```json
{
  "fullName": "Natnael Biruk"
}
```
- **Response:**
```json
{
  "id": 1,
  "fullName": "Natnael Biruk"
}
```

### **Add a Note**
- **Endpoint:** `POST /notes`
- **Request Body:**
```json
{
  "userId": 1,
  "content": "This is my first note."
}
```
- **Response:**
```json
{
  "noteId": 1,
  "userId": 1,
  "content": "This is my first note."
}
```

### **Get Notes by User ID**
- **Endpoint:** `GET /notes/:userId`
- **Example:** `GET /notes/1`
- **Response:**
```json
[
  {
    "noteId": 1,
    "userId": 1,
    "content": "This is my first note."
  }
]
```

## 🛠 Setup & Run
### **1. Install Dependencies**
```sh
npm install
```
### **2. Start the Server**
```sh
npm start
```
The server will run on `http://localhost:3000`

## 🛠 Testing the API
You can test the API using Postman or cURL by hitting the above endpoints with the required request bodies.


