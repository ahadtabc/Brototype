# Full Domain — Complete Project Summary

> A Node.js + Express + MongoDB application built with MVC architecture.
> This document explains every file, every concept, and the correct creation order.

---

## Table of Contents
1. [What is MVC?](#1-what-is-mvc)
2. [Project Structure](#2-project-structure)
3. [Technology Stack](#3-technology-stack)
4. [Creation Stages (in order)](#4-creation-stages-in-order)
5. [File-by-File Explanation](#5-file-by-file-explanation)
6. [Complete Request-Response Flow](#6-complete-request-response-flow)
7. [Session & Authentication Flow](#7-session--authentication-flow)
8. [Key Concepts Explained](#8-key-concepts-explained)

---

## 1. What is MVC?

**MVC** stands for **Model – View – Controller**. Each layer has exactly one job.

| Layer | Job | Files in this project |
|---|---|---|
| **Model** | Defines data structure, talks to the database | `models/userModel.js`, `models/adminModel.js` |
| **View** | Renders HTML to the browser using dynamic data | `views/user/*.hbs`, `views/admin/*.hbs` |
| **Controller** | Receives request, calls Service, sends response | `controllers/userController.js`, `controllers/adminController.js` |

**Extra layers** used here:

| Layer | Job | Files |
|---|---|---|
| **Service** | Isolates all DB queries; keeps Controllers thin | `services/userService.js`, `services/adminService.js` |
| **Route** | Maps URL + HTTP method → Controller method | `routes/userRoute.js`, `routes/adminRoute.js` |
| **Middleware** | Runs before Controllers to guard or transform requests | `middleware/userAuth.js`, `middleware/adminAuth.js` |
| **Config** | Infrastructure setup (DB connection) | `config/db.js` |

---

## 2. Project Structure

```
Full Domain/
├── app.js                    ← Entry point. Starts the server.
├── .env                      ← Secret config (DB URI, session secret, port)
├── package.json              ← npm metadata and dependency list
│
├── config/
│   └── db.js                 ← Connects to MongoDB using Mongoose
│
├── models/
│   ├── userModel.js          ← Schema for "users" collection
│   └── adminModel.js         ← Schema for "admins" collection
│
├── services/
│   ├── userService.js        ← User DB queries (findByEmail, findById, create)
│   └── adminService.js       ← Admin DB queries (CRUD + pagination + search)
│
├── middleware/
│   ├── userAuth.js           ← Protects user-only routes
│   └── adminAuth.js          ← Protects admin-only routes
│
├── routes/
│   ├── userRoute.js          ← User-facing URL routes
│   └── adminRoute.js         ← Admin-panel URL routes
│
├── controllers/
│   ├── userController.js     ← User login, signup, dashboard, logout
│   └── adminController.js    ← Admin login, manage/add/edit/delete users
│
├── views/
│   ├── user/
│   │   ├── login.hbs         ← User login form
│   │   ├── signup.hbs        ← User registration form
│   │   └── home.hbs          ← User dashboard (protected)
│   └── admin/
│       ├── login.hbs         ← Admin login form
│       ├── manageUsers.hbs   ← User list with search + pagination
│       ├── addUser.hbs       ← Create new user form
│       └── editUser.hbs      ← Update existing user form
│
└── admin/
    └── createAdmin.js        ← CLI script to seed the first admin account
```

---

## 3. Technology Stack

| Package | Version | Purpose |
|---|---|---|
| `express` | ^5.2.1 | Web framework — routing, middleware, HTTP |
| `hbs` | ^4.2.1 | Handlebars view engine for `.hbs` templates |
| `mongoose` | ^9.9.2 | ODM for MongoDB — schemas, models, queries |
| `express-session` | ^1.19.0 | Server-side sessions for auth state |
| `bcrypt` | ^6.0.0 | Password hashing — stores and verifies passwords securely |
| `dotenv` | ^17.4.2 | Loads `.env` into `process.env` |
| `nocache` | ^4.0.0 | Sets cache-control headers to prevent back-button exploits |
| `nodemon` | ^3.1.14 | Dev tool — auto-restarts server on file changes |

---

## 4. Creation Stages (in order)

### Stage 1 — Project Setup
```bash
npm init -y
npm install express hbs mongoose express-session bcrypt dotenv nocache
npm install -D nodemon
```
- Create `.env` with `MONGO_URI`, `PORT`, `SESSION_SECRET`
- Update `package.json` start script to `"nodemon app.js"`

**Why first?** Every other file depends on npm packages being installed.

---

### Stage 2 — Database Config (`config/db.js`)
- Import `mongoose`
- Write `connectDB()` async function using `mongoose.connect(process.env.MONGO_URI)`
- On failure: log the error and call `process.exit(1)` to stop the server
- Export the function

**Why second?** Models cannot query MongoDB without this connection being established first.

---

### Stage 3 — Models (`models/`)

**`userModel.js`**
- `userSchema` fields: `name` (String, required, trim), `email` (String, required, unique, trim), `password` (String, required), `role` (String, default: "user")
- `mongoose.model("User", userSchema)` → creates the `users` collection
- Export `User`

**`adminModel.js`**
- `adminSchema` fields: `name`, `email` (unique), `password`
- `mongoose.model("Admin", adminSchema)` → creates the `admins` collection
- Export `Admin`

**Why third?** Services import Models. Models must exist before Services can use them.

---

### Stage 4 — Services (`services/`)

**`userService.js`** — Class `UserService`:
- `findUserByEmail(email)` → `User.findOne({ email })`
- `findUserById(id)` → `User.findById(id)`
- `createUser(userData)` → `new User(data).save()`
- Export `new UserService()` singleton

**`adminService.js`** — Class `AdminService`:
- `findAdminByEmail(email)` → queries "admins" collection
- `getPaginatedUsers(search, skip, limit)` → paginated + filtered query with `$regex` + `$ne`
- `getTotalUsersCount(search)` → count for pagination math
- `findUserByEmail`, `createUser`, `findUserById`, `updateUser`, `deleteUser` → "users" collection
- Export `new AdminService()` singleton

**Why fourth?** Controllers call Services. Services must exist before Controllers.

---

### Stage 5 — Middleware (`middleware/`)

**`userAuth.js`**:
1. Check `req.session.userLoggedIn` → redirect to `/login` if missing
2. Query DB: `User.findById(...)` → destroy session if user deleted
3. Call `next()` if both checks pass

**`adminAuth.js`**:
1. Check `req.session.adminLoggedIn` → redirect to `/admin` if missing
2. Query DB: `Admin.findById(...)` → clear session if admin deleted
3. Call `next()` if both checks pass

**Why fifth?** Routes reference middleware. Middleware must exist before routes.

---

### Stage 6 — Controllers (`controllers/`)

**`userController.js`** — Class `UserController`:
- `getLogin` — renders login form, reads flash flags from session
- `postLogin` — calls `userService.findUserByEmail()`, uses `bcrypt.compare()`, sets `req.session.userLoggedIn`
- `getDashboard` — calls `userService.findUserById()`, renders `user/home`
- `logout` — nulls session, calls `req.session.destroy()`, clears cookie
- `getSignup` — renders signup form
- `postSignup` — validates passwords match, checks duplicate email, hashes with `bcrypt.hash()`, calls `userService.createUser()`

**`adminController.js`** — Class `AdminController`:
- `getLogin` / `postLogin` — admin auth against "admins" collection
- `getDashboard` — redirects to user list
- `getUsers` — pagination math (skip, limit, totalPages), calls `adminService`, maps rows with index numbers
- `getAddUser` / `postAddUser` — create user with role forced to `"user"`
- `getEditUser` / `postEditUser` — pre-fill form, email uniqueness check, optional password re-hash
- `deleteUser` — `adminService.deleteUser(req.params.id)`
- `logout` — destroy admin session, clear cookie

**Why sixth?** Routes call Controller methods. Controllers must exist before routes.

---

### Stage 7 — Routes (`routes/`)

**`userRoute.js`** — mounted at `/` in `app.js`:

| Method | URL | Middleware | Controller |
|---|---|---|---|
| GET | `/` | — | redirect to `/login` |
| GET | `/login` | — | `userController.getLogin` |
| POST | `/login` | — | `userController.postLogin` |
| GET | `/signup` | — | `userController.getSignup` |
| POST | `/signup` | — | `userController.postSignup` |
| GET | `/user/userDashboard` | `userAuth` | `userController.getDashboard` |
| GET | `/logout` | — | `userController.logout` |

**`adminRoute.js`** — mounted at `/admin` in `app.js`:

| Method | URL | Middleware | Controller |
|---|---|---|---|
| GET | `/` | — | `adminController.getLogin` |
| POST | `/login` | — | `adminController.postLogin` |
| GET | `/adminDashboard` | `adminAuth` | `adminController.getDashboard` |
| GET | `/adminUsers` | `adminAuth` | `adminController.getUsers` |
| GET | `/addUser` | `adminAuth` | `adminController.getAddUser` |
| POST | `/addUser` | `adminAuth` | `adminController.postAddUser` |
| GET | `/editUser/:id` | `adminAuth` | `adminController.getEditUser` |
| POST | `/editUser/:id` | `adminAuth` | `adminController.postEditUser` |
| GET | `/deleteUser/:id` | `adminAuth` | `adminController.deleteUser` |
| GET | `/logout` | — | `adminController.logout` |

**Why seventh?** Routes depend on Controllers AND middleware. Both must exist first.

---

### Stage 8 — Views (`views/`)

All `.hbs` templates — rendered by `res.render("path/file", { data })` in Controllers.

- `user/login.hbs` — login form, `{{#if msg}}` feedback
- `user/signup.hbs` — signup form, `{{#if error}}` validation error
- `user/home.hbs` — dashboard with `{{user.name}}`, back-button script
- `admin/login.hbs` — admin login, `{{msg}}` error display
- `admin/addUser.hbs` — create user form
- `admin/editUser.hbs` — pre-filled edit form using `{{user.name}}`, `{{user.email}}`, `{{user._id}}`
- `admin/manageUsers.hbs` — `{{#each users}}` table, flash messages, search form, pagination

**Why eighth?** Views don't depend on Node.js files. They're pure HTML + Handlebars.

---

### Stage 9 — Entry Point (`app.js`)

Wires everything together in this order:
1. `require("dotenv").config()` — load `.env`
2. Import all packages and route files
3. `connectDB()` — open DB connection
4. Middleware stack: `static`, `hbs`, `urlencoded`, `json`, `session`, `nocache`, cache headers
5. Mount routes: `app.use("/", userRoute)`, `app.use("/admin", adminRoute)`
6. Flash message middleware (copies session flags → `res.locals`)
7. `app.listen(PORT)` — start HTTP server

**Why last?** Imports and uses everything. All other files must exist first.

---

### Stage 10 — Admin Seed Script (`admin/createAdmin.js`)

One-time CLI script:
```bash
node admin/createAdmin.js admin@example.com password123
```
- Reads email/password from `process.argv[2]` and `process.argv[3]`
- Connects to MongoDB directly (standalone — not via `app.js`)
- Checks if admin already exists → skips if so
- Hashes password with `bcrypt.hash(password, 10)`
- Calls `Admin.create({ name: "Admin", email, password: hashedPassword })`

**Why last?** Needs the `Admin` model and `.env`. Run once after the app is set up.

---

## 5. File-by-File Explanation

### `.env`
```
MONGO_URI=mongodb://127.0.0.1:27017/userDB
PORT=3001
SESSION_SECRET=CIPHERCODE
```
- `MONGO_URI` — `127.0.0.1:27017` is localhost MongoDB. `userDB` is the database name (auto-created).
- `PORT` — Express listens on this port.
- `SESSION_SECRET` — Signs the session cookie. Change to a long random string in production.

---

### `config/db.js`
- Opens the Mongoose connection to MongoDB using `process.env.MONGO_URI`
- On failure: logs `error.message` and calls `process.exit(1)` (stops the server immediately)
- Exported as a function called once in `app.js`

---

### `models/userModel.js`
- **Collection**: `users`
- **Fields**: `name` (required, trim), `email` (required, unique, trim), `password` (required — bcrypt hash), `role` (default: `"user"`)
- The `role` field allows `adminService` to exclude admin accounts: `{ role: { $ne: "admin" } }`

---

### `models/adminModel.js`
- **Collection**: `admins`
- **Fields**: `name`, `email` (unique), `password`
- Separate from users — prevents accidental cross-contamination between user and admin data

---

### `services/userService.js`
- `findUserByEmail` — used by login and signup validation
- `findUserById` — used by dashboard to load user's name
- `createUser` — used by signup to save the new account

---

### `services/adminService.js`
- `findAdminByEmail` — admin login validation (queries "admins", not "users")
- `getPaginatedUsers(search, skip, limit)` — uses `$regex` (partial match), `$options: "i"` (case-insensitive), `$ne` (not equal), `.skip()` and `.limit()` for pagination
- `getTotalUsersCount` — same query but returns a number (`countDocuments`)
- Full CRUD: `findUserByEmail`, `createUser`, `findUserById`, `updateUser` (`findByIdAndUpdate`), `deleteUser` (`findByIdAndDelete`)

---

### `middleware/userAuth.js`
- **Protects**: `GET /user/userDashboard`
- **Check 1**: `req.session.userLoggedIn` must exist
- **Check 2**: `User.findById(req.session.userLoggedIn)` must return a document
- **On fail**: redirect to `/login` or destroy session
- **On pass**: call `next()`

---

### `middleware/adminAuth.js`
- **Protects**: all admin routes except `/` and `/login`
- **Check 1**: `req.session.adminLoggedIn` must exist
- **Check 2**: `Admin.findById(req.session.adminLoggedIn)` must return a document
- **On fail**: redirect to `/admin`
- **On pass**: call `next()`

---

### `controllers/userController.js`
**Session keys used**:
- `req.session.userLoggedIn` — stores user `_id` after login
- `req.session.passwordWrong` — flag to show error message on login page
- `req.session.signUpSuccess` — flag to show success message after signup

**Key operations**:
- `bcrypt.compare(password, hash)` — verify login
- `bcrypt.hash(password, 12)` — hash password before saving
- `req.session.destroy()` + `res.clearCookie("connect.sid")` — logout

---

### `controllers/adminController.js`
**Pagination logic** (in `getUsers`):
```js
const page  = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 7;
const skip  = (page - 1) * limit;              // documents to skip
const totalPages = Math.ceil(totalUsers / limit);
```
**Index numbering**: `u.index = skip + i + 1` so page 2 starts at row 8 (not 1).

**Optional password update** (in `postEditUser`):
```js
if (password && password.trim() !== "") {
  updatedData.password = await bcrypt.hash(password, 12);
}
```
Only hashes a new password if the admin actually typed one.

---

## 6. Complete Request-Response Flow

### User Login Flow
```
Browser → POST /login {email, password}
  → app.js middleware stack runs (session, nocache, cache headers)
  → userRoute.js: matches POST /login → userController.postLogin
  → userService.findUserByEmail(email) → MongoDB query → User doc returned
  → bcrypt.compare(password, user.password) → true/false
  → if true: req.session.userLoggedIn = user._id
  → res.redirect("/user/userDashboard")
  → userAuth runs → verifies session → next()
  → userController.getDashboard → userService.findUserById()
  → res.render("user/home", { user })
  → Browser receives HTML dashboard page
```

### Admin Delete User Flow
```
Browser → GET /admin/deleteUser/:id
  → app.js: request hits adminRoute (mounted at /admin)
  → adminRoute: matches GET /deleteUser/:id → adminAuth runs first
  → adminAuth: checks req.session.adminLoggedIn → Admin.findById() → valid → next()
  → adminController.deleteUser(req, res)
  → adminService.deleteUser(req.params.id) → User.findByIdAndDelete(id)
  → req.session.success = "User deleted successfully"
  → res.redirect("/admin/adminUsers")
  → Flash middleware: res.locals.success = session.success → delete from session
  → manageUsers.hbs renders → {{#if success}} shows green alert
```

---

## 7. Session & Authentication Flow

### How sessions work

```
1. Login success     → req.session.userLoggedIn = user._id
                       express-session stores this in server memory
                       sends Set-Cookie: connect.sid=xxxxx to browser

2. Next request      → browser sends Cookie: connect.sid=xxxxx
                       express-session reads it → restores req.session
                       req.session.userLoggedIn is now available

3. userAuth checks   → req.session.userLoggedIn exists? → query DB
                       user doc exists in DB? → next() → Controller

4. Logout            → req.session.destroy() removes server-side session
                       res.clearCookie("connect.sid") removes browser cookie
                       Browser has no cookie → next request has no session
```

### Back-button prevention

Two mechanisms work together:
1. **Server-side headers**: `Cache-Control: no-store`, `Pragma: no-cache` (via `nocache()` and custom middleware) — tells the browser not to cache
2. **Client-side script** in each `.hbs`: `pageshow` event with `event.persisted === true` detects bfcache → forces `window.location.reload()` → server re-validates session → redirects to login

---

## 8. Key Concepts Explained

### bcrypt
- One-way password hashing (cannot be reversed)
- `bcrypt.hash(password, 12)` — 12 salt rounds: more = slower computation = harder to brute-force
- `bcrypt.compare(plain, hash)` — returns `true` if they match
- **Rule**: NEVER store plain-text passwords

### Mongoose Schema vs Model
- **Schema** = blueprint (field names, types, validation rules)
- **Model** = class generated from the schema; provides `find()`, `findById()`, `create()`, etc.
- `mongoose.model("User", userSchema)` → collection name becomes `"users"` (auto-pluralised)

### Sessions vs Cookies
- **Cookie** (`connect.sid`) — stored in browser, contains only a session ID (not sensitive data)
- **Session** — stored on the SERVER, holds actual data (user ID, flags)
- This is secure because the user can only see the session ID in their cookie, not the data

### Flash Messages
- Pattern for sending a one-time message through a redirect
- Set: `req.session.success = "User added"` → before `res.redirect()`
- Read and clear: `res.locals.success = req.session.success; delete req.session.success;` (in `app.js` middleware)
- Display: `{{#if success}}<div class="alert alert-success">{{success}}</div>{{/if}}` in `.hbs`

### Pagination
| Variable | Formula | Example (page 2, limit 7) |
|---|---|---|
| `skip` | `(page - 1) * limit` | `(2-1) * 7 = 7` |
| `totalPages` | `Math.ceil(total / limit)` | `Math.ceil(15/7) = 3` |
| `previousPage` | `page > 1 ? page - 1 : null` | `1` |
| `nextPage` | `page < totalPages ? page + 1 : null` | `3` |

### URL Parameters
- `/admin/editUser/:id` — `:id` is a named placeholder
- `req.params.id` contains the actual value from the URL
- Example: `/admin/editUser/64b1a` → `req.params.id === "64b1a"`

### Handlebars Helpers
| Syntax | What it does |
|---|---|
| `{{variable}}` | Output a value |
| `{{#if cond}}...{{/if}}` | Render if condition is truthy |
| `{{#unless cond}}...{{/unless}}` | Render if condition is falsy |
| `{{#each arr}}...{{/each}}` | Loop; `this` = current item |
| `{{!-- comment --}}` | Template comment (not sent to browser) |

### Service Pattern
Without a Service layer: Controller → Model (tightly coupled, hard to test)
With a Service layer: Controller → Service → Model (loosely coupled, each part testable alone)

---

*Architecture: MVC + Service Layer | Stack: Node.js · Express · MongoDB · Handlebars · Bootstrap 5*
