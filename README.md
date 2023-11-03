## ✨ ChatPT Clone  API

## ✨ v1.0.0

## ✨ About The Project
A RESTful API allows users to interact with the OpenAI API This API is built with Node.js, Express framework, and MongoDB.


## 👋 Welcome

This project is a "Simplified ChatPT," with separate repositories for the frontend and backend. You can view the frontend repository at [HERE](https://github.com/ywcheng1207/gpt-frontend-project). 

To use this API, besides cloning the code, you will also need to prepare your MongoDB account and have the connection string ready.

## ✨ Here are the steps to use this project
1. Clone the code 
    ```
    clone https://github.com/ywcheng1207/gpt-backend-project.git
    npm i
    ```
2. Make sure you have your MongoDB account ready. Some things like  :
    ```
    mongodb+srv://?????:<XXXXX>@chatlogdb.oxsymju.mongodb.net/chat?retryWrites=true&w=majority
    ```
3. In the project, create a .env file and add the following items to it. 
    - PORT
    - MONGODB_URI
    - KEY
    -OPENAI_API_KEY

    explanation: </br>
    The URI is the connection string mentioned earlier, and the KEY is a string required for the JWT token (you can choose any text for this, just input something for now). Additionally, you will need an OpenAI API KEY.

4. Start !
    ```
    npm run dev
    ```

## ✨ Tools 
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "jwt-decode": "^4.0.0",
    "mongoose": "^7.6.3",
    "openai": "^4.14.1"
