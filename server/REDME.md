# Jatayu Go Anywhere - Backend

This is the backend for the Jatayu Go Anywhere project, built using Node.js, Express, and MongoDB. It provides user authentication, registration, and profile management functionalities.

---

## Project Structure

- **`server.js`**: Entry point of the application.
- **`app.js`**: Configures middleware and routes.
- **`routes/`**: Contains route definitions.
- **`controllers/`**: Contains logic for handling requests.
- **`middleware/`**: Contains middleware for authentication.
- **`model/`**: Defines MongoDB schemas.
- **`services/`**: Contains reusable service logic.
- **`db/`**: Handles database connection.

---

## API Endpoints

### User Routes

#### 1. **Register User**
- **Endpoint**: `POST /users/register`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      "_id": "USER_ID",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

---

#### 2. **Login User**
- **Endpoint**: `POST /users/login`
- **Description**: Logs in an existing user.
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      "_id": "USER_ID",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

---

#### 3. **Get User Profile**
- **Endpoint**: `GET /users/profile`
- **Description**: Retrieves the profile of the authenticated user.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

---

#### 4. **Logout User**
- **Endpoint**: `GET /users/logout`
- **Description**: Logs out the authenticated user by blacklisting the token.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Logout successful"
  }
  ```

---

## Environment Variables

The following environment variables are required to run the application:

- **`PORT`**: Port number for the server (default: `5000`).
- **`DB_CONNECT`**: MongoDB connection string.
- **`JWT_SECRET`**: Secret key for signing JWT tokens.

---
## API Endpoints

### User Routes

#### 1. **Register User**
- **Endpoint**: `POST /users/register`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      "_id": "USER_ID",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

---

#### 2. **Login User**
- **Endpoint**: `POST /users/login`
- **Description**: Logs in an existing user.
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      "_id": "USER_ID",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

---

#### 3. **Get User Profile**
- **Endpoint**: `GET /users/profile`
- **Description**: Retrieves the profile of the authenticated user.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

---

#### 4. **Logout User**
- **Endpoint**: `GET /users/logout`
- **Description**: Logs out the authenticated user by blacklisting the token.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Logout successful"
  }
  ```

---

### Captain Routes

#### 1. **Register Captain**
- **Endpoint**: `POST /captains/register`
- **Description**: Registers a new captain.
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```
- **Response**:
  ```json
  {
    "token": "JWT_TOKEN",
    "captain": {
      "_id": "CAPTAIN_ID",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

---

#### 2. **Login Captain**
- **Endpoint**: `POST /captains/login`
- **Description**: Logs in an existing captain.
- **Request Body**:
  ```json
  {
    "email": "jane.smith@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "JWT_TOKEN",
    "captain": {
      "_id": "CAPTAIN_ID",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

---

#### 3. **Get Captain Profile**
- **Endpoint**: `GET /captains/profile`
- **Description**: Retrieves the profile of the authenticated captain.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN"
  }
  ```
- **Response**:
  ```json
  {
    "captain": {
      "_id": "CAPTAIN_ID",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

---

#### 4. **Logout Captain**
- **Endpoint**: `GET /captains/logout`
- **Description**: Logs out the authenticated captain by blacklisting the token.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer JWT_TOKEN"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Logout successful"
  }
  ```

---

## Environment Variables

The following environment variables are required to run the application:

- **`PORT`**: Port number for the server (default: `5000`).
- **`DB_CONNECT`**: MongoDB connection string.
- **`JWT_SECRET`**: Secret key for signing JWT tokens.

---

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the required environment variables.
4. Start the server:
   ```bash
   npm start
   ```
5. The server will run at `http://localhost:5000`.

---

## Database Models

### User Model
- **`fullname`**: Object containing `firstname` and `lastname`.
- **`email`**: Unique email address.
- **`password`**: Hashed password.
- **`socketId`**: Optional field for storing socket ID.

### Captain Model
- **`fullname`**: Object containing `firstname` and `lastname`.
- **`email`**: Unique email address.
- **`password`**: Hashed password.
- **`vehicle`**: Object containing `color`, `plate`, `capacity`, and `vehicleType`.


### User Model
- **`fullname`**: Object containing `firstname` and `lastname`.
- **`email`**: Unique email address.
- **`password`**: Hashed password.
- **`socketId`**: Optional field for storing socket ID.

### Blacklist Model
- **`token`**: Blacklisted JWT token.
- **`createdAt`**: Timestamp for automatic expiration (24 hours).

---

## Middleware

### Authentication Middleware
- **File**: `middleware/auth.middleware.js`
- **Functionality**: Verifies JWT tokens and checks if the token is blacklisted.

---

## License

This project is licensed under the MIT License.