# React CRUD User Management App

A modern contact management application built with React, featuring add, edit, delete, and view operations with real-time data synchronization.  


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
Contact manage app/
├── backend/
│   ├── db.json
│   ├── package.json
│   └── server.js
├── crud-app/
│   ├── public/
│   └── src/
│       ├── api/
       ├── components/
       ├── config/
       └── utils/
├── README.md
```

## Prerequisites

- Node.js (v14+)
- npm (comes with Node) or yarn

## Quick start

1. Start the backend API server

   ```bash
   cd backend
   npm install
   npm start
   ```

   The backend uses `json-server` via `server.js` and will listen on `http://localhost:5000` by default.

2. Start the frontend

   ```bash
   cd ../crud-app
   npm install
   npm start
   ```

   The React app runs at `http://localhost:3000` in development.

Optional: instead of `npm start` in `backend`, you can run `npx json-server --watch db.json --port 5000`.


## API endpoints (JSON Server)

- `GET /users` — list users
- `GET /users/:id` — single user
- `POST /users` — create user
- `PUT /users/:id` — update user
- `DELETE /users/:id` — delete user

## Build for production

To build the frontend for production:

```bash
cd crud-app
npm run build
```

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


