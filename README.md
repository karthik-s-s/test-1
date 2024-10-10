## TEST APPLICATION

This project includes feature like User Registration,
login, import data from excel sheet store and a Get APi for filtering data.

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