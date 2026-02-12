# React CRUD User Management App

A modern contact management application built with React, featuring add, edit, delete, and view operations with real-time data synchronization.  

## "Backend is simulated with JSON‑server locally. Replace API_URL in api.js with the provided API when available."


## Features

- ✅ **Create Contacts** - Add new users with validation
- ✅ **Read Contacts** - View all users in a table format
- ✅ **Update Contacts** - Edit existing user information
- ✅ **Delete Contacts** - Remove users with confirmation
- ✅ **Form Validation** - Client-side validation using Yup
- ✅ **Professional UI** - Material-UI components for a polished interface
- ✅ **Loading States** - Visual feedback during API calls
- ✅ **Error Handling** - Graceful error management
- ✅ **Responsive Design** - Works on desktop and tablet devices

## Technology Stack

- **Frontend**: React 18
- **State Management**: React Hooks (useState, useEffect)
- **Form Management**: React Hook Form
- **Validation**: Yup schema validation
- **UI Framework**: Material-UI (MUI)
- **Backend API**: JSON Server (for development)
- **HTTP Client**: Axios

## Project Structure

```
my-crud-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── api/
│   │   └── api.js                  # API service layer
│   ├── components/
│   │   ├── Loader.js               # Loading spinner component
│   │   ├── userForm.js             # Form component for creating/editing users
│   │   └── userList.js             # Table component displaying users
│   ├── config/
│   │   └── formConfig.js           # Form fields configuration
│   ├── pages/
│   │   ├── Home.js                 # Main page component
│   │   └── UserForm.js             # User form page
│   ├── styles/
│   │   └── App.css                 # Global styles
│   ├── utils/
│   │   └── validationSchema.js     # Yup validation schema
│   ├── App.js                      # Main App component
│   ├── index.js                    # Entry point
│   └── index.css                   # Global CSS
├── db.json                         # JSON Server database
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd my-crud-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install JSON Server globally (for backend)**
   ```bash
   npm install -g json-server
   ```

## Running the Application

### Terminal 1 - Start JSON Server (Backend)
```bash
json-server --watch db.json --port 5000
```
This starts the mock API server on `http://localhost:5000`

### Terminal 2 - Start React Development Server
```bash
npm start
```
The app will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Usage

### Adding a Contact
1. Fill in the form fields (First Name, Last Name, Phone, Email)
2. Click the **Save** button
3. The form clears and the new contact appears in the table

### Editing a Contact
1. Click the **Edit** button next to a contact
2. The form populates with the contact's current information
3. Make your changes
4. Click **Save** to update

### Deleting a Contact
1. Click the **Delete** button next to a contact
2. The contact is removed from the database

## Form Validation Rules

- **First Name**: Required, minimum 2 characters
- **Last Name**: Required, minimum 2 characters
- **Phone**: Valid phone number format
- **Email**: Valid email address

## API Endpoints

The app communicates with the following endpoints (when using JSON Server on port 5000):

- `GET /users` - Retrieve all users
- `GET /users/:id` - Retrieve a specific user
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Customization

### Add/Remove Form Fields
Edit `src/config/formConfig.js` to customize form fields:
```javascript
export const userFormFields = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  // Add more fields here
];
```

### Update Validation Rules
Modify `src/utils/validationSchema.js` to change validation rules using Yup.

### Change API Endpoint
Update the base URL in `src/api/api.js`:
```javascript
const API_BASE_URL = "http://localhost:5000";
```

## Troubleshooting

### Issue: Fields not clearing after save
- ✅ Fixed: Form now properly resets using React Hook Form's `reset()` method

### Issue: Edit button not working
- ✅ Fixed: Form properly updates when editing a contact

### Issue: JSON Server not running
- Ensure JSON Server is installed: `npm install -g json-server`
- Check that port 5000 is not in use
- Run: `json-server --watch db.json --port 5000`

### Issue: API connection errors
- Verify JSON Server is running on port 5000
- Check network tab in browser DevTools
- Ensure `db.json` exists in the project root




