# Jatayu Go Anywhere

Jatayu Go Anywhere is a web application designed to provide seamless login and signup experiences for both users and captains. It includes user-friendly forms and routing for different user roles.

## Features

- User Login and Signup
- Captain Login and Signup
- Context API for managing user state
- React Router for navigation
- Responsive and modern UI

## Tech Stack

- React.js
- React Router
- Context API
- Tailwind CSS

## Project Structure

```
client/
├── src/
│   ├── assets/          # Static assets like images
│   ├── context/         # Context API for state management
│   ├── pages/           # React components for different pages
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point for the React app
│   └── index.css        # Global styles
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Jatayu_go_anywhere/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Usage

### User Login
- Navigate to `/login` to log in as a user.
- Enter your email and password to authenticate.

### User Signup
- Navigate to `/signup` to create a new user account.
- Fill in your first name, last name, email, and password.

### Captain Login
- Navigate to `/captain-login` to log in as a captain.
- Enter your email and password to authenticate.

### Captain Signup
- Navigate to `/captain-signup` to create a new captain account.
- Fill in your first name, last name, email, and password.

## Context API

The application uses Context API to manage user state globally. The `UserContext` component wraps the app and provides `user` and `setUser` values.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
