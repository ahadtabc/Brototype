# 📦 Full Domain — Project Summary

## 📌 What Is This Project?

**Full Domain** is a full-stack web application built with **Node.js**, **Express**, **MongoDB**, and **Handlebars (HBS)** as the templating engine.

It is a **User Management System** that has two separate panels:
- **User Panel** — for normal users to register, log in, view their dashboard, and log out.
- **Admin Panel** — for admins to log in, view all users, add new users, edit existing users, delete users, and log out.

The project follows the **MVC (Model-View-Controller)** architecture, which separates concerns cleanly into:
- **Model** → MongoDB schemas (data structure)
- **View** → Handlebars templates (HTML pages)
- **Controller** → JavaScript logic (business rules)
- **Service** → Database query functions (data access layer)
- **Middleware** → Authentication guards (session checks)
- **Routes** → URL path definitions

---

## 🏗️ Project Creation Stages (Step by Step)

---

### ✅ Stage 1 — Project Initialization

**Goal:** Set up the project folder, install dependencies, and create the entry point.

**Steps:**
1. Create a new project folder: `Full Domain/`
2. Run `npm init` inside the folder to generate `package.json`
3. Install all required npm packages:
   ```bash
   npm install express mongoose hbs express-session bcrypt dotenv nocache
   npm install --save-dev nodemon
   ```
4. Create the main entry file `app.js`
5. Create a `.env` file to store secrets:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3001
   SESSION_SECRET=your_secret_key
   ```
6. Configure `package.json` to start the app with `nodemon`:
   ```json
   "scripts": {
     "start": "nodemon app.js"
   }
   ```

---

### ✅ Stage 2 — Database Connection (`config/db.js`)

**Goal:** Connect the app to MongoDB using Mongoose.

**Steps:**
1. Create the folder `config/`
2. Create `config/db.js`
3. Write a function `connectDB()` that connects to MongoDB using the URI from `.env`
4. Handle connection errors and exit the process if connection fails
5. Export `connectDB` so `app.js` can call it on startup

---

### ✅ Stage 3 — Database Models (`models/`)

**Goal:** Define the shape (schema) of the data stored in MongoDB.

**Steps:**
1. Create the folder `models/`
2. Create `models/userModel.js`:
   - Define a schema with fields: `name`, `email`, `password`, `role` (defaults to `"user"`)
   - Export the `User` model
3. Create `models/adminModel.js`:
   - Define a schema with fields: `name`, `email`, `password`
   - Export the `Admin` model

---

### ✅ Stage 4 — Service Layer (`services/`)

**Goal:** Create reusable database query functions to keep controllers clean.

**Steps:**
1. Create the folder `services/`
2. Create `services/userService.js`:
   - `findUserByEmail(email)` — finds a user by email
   - `findUserById(id)` — finds a user by ID
   - `createUser(userData)` — saves a new user to the database
3. Create `services/adminService.js`:
   - `findAdminByEmail(email)` — finds an admin by email
   - `getPaginatedUsers(searchQuery, skip, limit)` — returns users with pagination and search
   - `getTotalUsersCount(searchQuery)` — counts total users for pagination
   - `findUserByEmail(email)` — checks if email already exists
   - `createUser(userData)` — admin creates a new user
   - `findUserById(id)` — fetches a single user for editing
   - `updateUser(id, updateData)` — updates user fields
   - `deleteUser(id)` — permanently deletes a user

---

### ✅ Stage 5 — Middleware (Authentication Guards) (`middleware/`)

**Goal:** Protect routes so that only logged-in users/admins can access protected pages.

**Steps:**
1. Create the folder `middleware/`
2. Create `middleware/userAuth.js`:
   - Check if `req.session.userLoggedIn` exists
   - If not, redirect to `/login`
   - If session exists but user is not found in DB, destroy session and redirect
   - If valid, call `next()` to allow the request to continue
3. Create `middleware/adminAuth.js`:
   - Check if `req.session.adminLoggedIn` exists
   - If not, redirect to `/admin`
   - If session exists but admin is not found in DB, clear session and redirect
   - If valid, call `next()` to allow the request to continue

---

### ✅ Stage 6 — Controllers (`controllers/`)

**Goal:** Write the business logic — what happens when a URL is visited or a form is submitted.

**Steps:**
1. Create the folder `controllers/`
2. Create `controllers/userController.js`:
   - `getLogin` — shows the login page (redirects if already logged in)
   - `postLogin` — verifies email + password, saves session, redirects to dashboard
   - `getDashboard` — fetches user from DB and renders the home/dashboard view
   - `logout` — destroys session, clears cookie, redirects to login
   - `getSignup` — shows signup form (redirects if already logged in)
   - `postSignup` — validates all fields (name, email, password, confirmPassword), hashes password, creates user in DB, redirects to login
3. Create `controllers/adminController.js`:
   - `getLogin` — shows admin login page
   - `postLogin` — authenticates admin with bcrypt, saves session
   - `getDashboard` — redirects to manage users
   - `getUsers` — fetches paginated + searchable user list, renders manage users page
   - `getAddUser` — renders the add user form
   - `postAddUser` — validates all inputs, hashes password, creates user in DB
   - `getEditUser` — fetches user by ID, renders edit form pre-filled
   - `postEditUser` — validates inputs, updates user fields (hashes password only if provided)
   - `deleteUser` — permanently removes a user by ID
   - `logout` — destroys admin session, clears cookie, redirects

---

### ✅ Stage 7 — Routes (`routes/`)

**Goal:** Map URL paths to the correct controller functions.

**Steps:**
1. Create the folder `routes/`
2. Create `routes/userRoute.js`:
   - `GET /` → redirects to `/login`
   - `GET /login` → `userController.getLogin`
   - `POST /login` → `userController.postLogin`
   - `GET /signup` → `userController.getSignup`
   - `POST /signup` → `userController.postSignup`
   - `GET /user/userDashboard` → **protected by `userAuth`** → `userController.getDashboard`
   - `GET /logout` → `userController.logout`
3. Create `routes/adminRoute.js`:
   - `GET /` → `adminController.getLogin`
   - `POST /login` → `adminController.postLogin`
   - `GET /adminDashboard` → **protected** → `adminController.getDashboard`
   - `GET /adminUsers` → **protected** → `adminController.getUsers`
   - `GET /addUser` → **protected** → `adminController.getAddUser`
   - `POST /addUser` → **protected** → `adminController.postAddUser`
   - `GET /editUser/:id` → **protected** → `adminController.getEditUser`
   - `POST /editUser/:id` → **protected** → `adminController.postEditUser`
   - `GET /deleteUser/:id` → **protected** → `adminController.deleteUser`
   - `GET /logout` → `adminController.logout`

---

### ✅ Stage 8 — Views (`views/`)

**Goal:** Create the HTML pages that users see in the browser, using Handlebars templating.

**Steps:**
1. Create the folder `views/` with sub-folders `views/user/` and `views/admin/`
2. Create user-facing views:
   - `views/user/login.hbs` — login form with email and password
   - `views/user/signup.hbs` — signup form with name, email, password, confirm password
   - `views/user/home.hbs` — user dashboard showing their name
3. Create admin-facing views:
   - `views/admin/login.hbs` — admin login form
   - `views/admin/manageUsers.hbs` — table of all users with search, pagination, edit/delete buttons
   - `views/admin/addUser.hbs` — form to create a new user
   - `views/admin/editUser.hbs` — pre-filled form to update a user's details

---

### ✅ Stage 9 — Main Entry Point (`app.js`)

**Goal:** Wire everything together — middleware, sessions, routes, and start the server.

**Steps:**
1. Load environment variables with `dotenv`
2. Create an Express app
3. Connect to MongoDB by calling `connectDB()`
4. Serve static files from the `public/` folder
5. Set Handlebars as the view engine
6. Add body parsers for form submissions (URL-encoded and JSON)
7. Configure `express-session` with a secret, cookie max-age of 1 hour
8. Add `nocache()` middleware to prevent browser back-button caching
9. Add a manual cache-control header middleware for extra security
10. Mount user routes at `/`
11. Mount admin routes at `/admin`
12. Add a global middleware to pass flash-style session messages to views
13. Start the server and listen on the configured port

---

### ✅ Stage 10 — Admin Seeder Script (`admin/createAdmin.js`)

**Goal:** Create the very first admin account in the database from the command line.

**Steps:**
1. Create the folder `admin/`
2. Create `admin/createAdmin.js`
3. Accept email and password as command-line arguments (with defaults)
4. Connect to MongoDB, check if admin already exists, hash the password, and save
5. Run it once with: `node admin/createAdmin.js admin@mail.com MyPassword123`

---

## 🗂️ Project Folder Structure

```
Full Domain/
├── admin/
│   └── createAdmin.js       ← One-time script to seed admin account
├── config/
│   └── db.js                ← MongoDB connection setup
├── controllers/
│   ├── userController.js    ← User login, signup, dashboard, logout logic
│   └── adminController.js   ← Admin CRUD user management logic
├── middleware/
│   ├── userAuth.js          ← Protects user routes (checks session)
│   └── adminAuth.js         ← Protects admin routes (checks session)
├── models/
│   ├── userModel.js         ← MongoDB schema for users
│   └── adminModel.js        ← MongoDB schema for admins
├── routes/
│   ├── userRoute.js         ← URL paths for user panel
│   └── adminRoute.js        ← URL paths for admin panel
├── services/
│   ├── userService.js       ← DB query helpers for user data
│   └── adminService.js      ← DB query helpers for admin operations
├── views/
│   ├── user/
│   │   ├── login.hbs        ← User login page
│   │   ├── signup.hbs       ← User signup page
│   │   └── home.hbs         ← User dashboard
│   └── admin/
│       ├── login.hbs        ← Admin login page
│       ├── manageUsers.hbs  ← User list with search & pagination
│       ├── addUser.hbs      ← Add new user form
│       └── editUser.hbs     ← Edit user form
├── .env                     ← Secret environment variables
├── app.js                   ← Main entry point
└── package.json             ← Project config and dependencies
```

---

## 🔐 Security Features Implemented

| Feature | How It Works |
|---|---|
| Password Hashing | `bcrypt.hash()` with 12 salt rounds before saving |
| Session-Based Auth | `express-session` stores login state on server |
| Route Guards | `userAuth` and `adminAuth` middleware block unauthorized access |
| Cache Prevention | `nocache()` + manual headers prevent browser back-button bypass |
| Input Validation | Backend regex checks on name, email, and password before DB access |
| Strong Password Rule | Min 8 chars, must contain uppercase, lowercase, and a number |

---

## 📦 npm Packages Used

| Package | Purpose |
|---|---|
| `express` | Web framework — handles routes and HTTP |
| `mongoose` | MongoDB ODM — defines schemas and queries |
| `hbs` | Handlebars view engine for HTML templates |
| `express-session` | Server-side session management |
| `bcrypt` | Secure password hashing and comparison |
| `dotenv` | Loads environment variables from `.env` file |
| `nocache` | Disables browser caching for all responses |
| `nodemon` | Auto-restarts server on file changes (dev tool) |
