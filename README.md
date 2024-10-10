## TEST APPLICATION

This project includes feature like User Registration,
login, importing data from excel sheet storing and a Get APi for filtering data.

## Database Design

The application uses MySQL with the following schema:

- **User**: Stores user details like `id`, `username`, `password`.
- **Chat**: Stores group details like `id`, `sender`,`receiver` and `message`.

## Installation

To run the application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/karthik-s-s/test-1.git
   cd chat-app
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **create schema**
   ```bash
   CREATE SCHEMA userdb
   ```
4. **Run the Project**
   ```bash
   npm start
   ```

## API ENDPOINTS

#### Register

- **URL**: `/register`
- **Method**: `POST`
- **Request**:
  ```json
  {
    "username": "example",
    "password": "password"
  }
  ```
  - **Response**:
  ```json
  {
    "status": true,
    "msg": "User registered successfully."
  }
  ```

#### Login

- **URL**: `/login`
- **Method**: `POST`
- **Request**:
  ```json
  {
    "username": "example",
    "password": "password"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt-token",
    "status": true
  }
  ```
  #### Process chat
- **URL**: `/processChat`
- **Method**: `POST`
- **Request**:
  ```json
  {
    "file"
  }
  ```
- **Response**:
  ```json
  {
    "msg": "Chat processed successfully",
    "status": true
  }
  ```

#### filter chat

- **URL**: `/filter`
- **Method**: `GET`
- **Request**:
  ```json
  {
    "task": "req.query"
  }
  ```
- **Response**:
  ```json
  {
    "data": "array of data",
    "status": true
  }
  ```
