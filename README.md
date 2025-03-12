
Task1-Notes API

This is a simple Express.js API that allows users to register and add notes, following the principles of Clean Architecture.

🚀 Features
	•	User Registration: Allows users to register with their full name.
	•	Note Creation: Registered users can create notes by providing the user ID and note content.
	•	Get Notes by User ID: Fetch all the notes created by a specific user.

🛠️ Technologies Used
	•	Express.js: Web framework for building APIs.
	•	Node.js: JavaScript runtime.
	•	JSON File as Database: A simple JSON file is used to store user and note data.
	•	Clean Architecture: Follows Clean Architecture principles for better separation of concerns.

🌐 Endpoints

POST /register

Registers a new user by providing their full name.

Request Body

{
  "fullName": "John Doe"
}

Response

{
  "id": 1,
  "fullName": "John Doe"
}

POST /notes

Allows a registered user to add a note.

Request Body

{
  "userId": 1,
  "content": "This is a sample note content."
}

Response

{
  "id": 1,
  "userId": 1,
  "content": "This is a sample note content."
}

GET /notes/:userId

Fetches all notes created by the user with the provided userId.

Response

[
  {
    "id": 1,
    "userId": 1,
    "content": "This is a sample note content."
  }
]

🛠️ Setup Instructions
	1.	Clone the repository:

git clone https://github.com/your-username/Task1-Notes.git
cd Task1-Notes


	2.	Install dependencies:

npm install


	3.	Start the server:

npm run dev

The server will start running on http://localhost:3000.

🧪 Testing

You can test the API using Postman or cURL by hitting the above endpoints with the required request bodies.

⸻

Folder Structure:

Task1-Notes/
│
├── Controllers/                # Contains the logic for handling API requests
│   └── userController.js       # Handles user-related API requests
│
├── Routes/                     # Defines the routing for the application
│   └── userRoutes.js           # Defines the routes related to users and notes
│
├── Usecases/                   # Contains the use cases (business logic)
│   └── userUsecase.js          # Logic for user registration
│   └── noteUsecase.js          # Logic for note creation and retrieval
│
├── Data/                       # Data storage (JSON file in this case)
│   └── users.json              # Stores user data
│   └── notes.json              # Stores notes data
│
├── server.js                   # Main entry point for the Express app
└── README.md                   # Project documentation

🔧 How It Works
	1.	Controllers handle incoming HTTP requests, interact with the use cases, and send back the appropriate responses.
	2.	Routes define the endpoints and connect the controllers to the HTTP methods.
	3.	Usecases contain the business logic and interact with the data layer.
	4.	Data stores the users and notes information in a simple JSON file.


⸻
