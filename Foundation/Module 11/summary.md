# Module 11 — Full Domain Project: Complete MVC Summary

> **Project:** User & Admin Management System
> **Stack:** Node.js · Express.js · MongoDB · Mongoose · Handlebars (HBS) · bcrypt · express-session
> **Architecture:** MVC (Model – View – Controller)

---

## Table of Contents

1. [What is MVC Architecture?](#1-what-is-mvc-architecture)
2. [Why Use MVC?](#2-why-use-mvc)
3. [MVC in This Project — Visual Diagram](#3-mvc-in-this-project--visual-diagram)
4. [Layer-by-Layer Explanation](#4-layer-by-layer-explanation)
   - [Model (M)](#model-m)
   - [View (V)](#view-v)
   - [Controller (C)](#controller-c)
   - [Routes — The Traffic Director](#routes--the-traffic-director)
   - [Middleware — The Gatekeeper](#middleware--the-gatekeeper)
   - [Services — The Database Worker](#services--the-database-worker)
   - [Config — Infrastructure](#config--infrastructure)
5. [Full Request–Response Flow](#5-full-requestresponse-flow)
6. [Key Packages Explained](#6-key-packages-explained)
7. [Session & Authentication Flow](#7-session--authentication-flow)
8. [How Passwords Are Secured (bcrypt)](#8-how-passwords-are-secured-bcrypt)
9. [Flash Messages Explained](#9-flash-messages-explained)
10. [Pagination & Search Logic](#10-pagination--search-logic)
11. [Project Folder Structure](#11-project-folder-structure)
12. [All Files — Commented Reference Table](#12-all-files--commented-reference-table)
13. [Common Beginner Questions](#13-common-beginner-questions)

---

## 1. What is MVC Architecture?

**MVC** stands for **Model – View – Controller**. It is a **software design pattern** — a structured way to organize your code so each part has **one job and one job only**.

| Letter | Name | Simple Definition |
|--------|------|-------------------|
| **M** | **Model** | Represents the **data** and the **rules** about data. Talks to the database. |
| **V** | **View** | The **user interface** — what the user sees in the browser (HTML pages). |
| **C** | **Controller** | The **brain/logic** — receives requests, processes them, and decides what to show. |

### Analogy: A Restaurant

Think of building a web app like running a restaurant:

| MVC Part | Restaurant Equivalent | Role |
|---|---|---|
| **Model** | The Kitchen | Stores and prepares the "data" (food). Knows the recipes (schemas). |
| **View** | The Menu & Plate Presentation | What the customer sees — the final output. |
| **Controller** | The Waiter | Takes the customer's order (request), gives it to kitchen (model), brings back the food (response/view). |
| **Route** | The Front Door / Reception | Directs each customer to the right waiter. |
| **Middleware** | Security Guard at Door | Checks if you're allowed in before you even reach the waiter. |
| **Service** | A Specialized Chef | Does specific cooking tasks (DB queries) so the waiter doesn't have to cook. |

---

## 2. Why Use MVC?

Without MVC, all your code (database queries, HTML, logic) would be in ONE messy file. MVC separates concerns:

```
WITHOUT MVC (bad):
  app.js -> everything mixed together -> spaghetti code -> hard to fix/extend

WITH MVC (good):
  models/      -> only data rules
  views/       -> only HTML templates
  controllers/ -> only request handling logic
  routes/      -> only URL mapping
  services/    -> only database queries
```

**Benefits:**
- **Easy to debug** — you know exactly which folder/file to look in for each problem
- **Reusable** — service methods can be used by multiple controllers
- **Testable** — each layer can be tested independently
- **Team-friendly** — front-end devs work on Views, back-end on Controllers/Models
- **Scalable** — easy to add new features without breaking existing ones

---

## 3. MVC in This Project — Visual Diagram

```
+-----------------------------------------------------------------------+
|                     BROWSER (User/Admin)                              |
|                http://localhost:3001/login                             |
+-------------------------------+---------------------------------------+
                                |  HTTP Request (GET /login)
                                v
+-----------------------------------------------------------------------+
|                           app.js                                      |
|  Middleware Stack (runs on EVERY request in order):                   |
|   1. express.static()      -> serve CSS/JS/images from /public        |
|   2. express.urlencoded()  -> parse HTML form data into req.body      |
|   3. express.json()        -> parse JSON data into req.body           |
|   4. session()             -> attach session to every req             |
|   5. nocache()             -> add no-cache HTTP headers               |
|   6. flash()               -> enable one-time flash messages          |
|   7. res.locals setup      -> make flash available in all HBS views   |
+-------------------------------+---------------------------------------+
                                |
              +-----------------+------------------+
              |                                    |
              v                                    v
+----------------------------+        +------------------------------+
|   routes/userRoute.js      |        |   routes/adminRoute.js       |
|   Mounted at: "/"          |        |   Mounted at: "/admin"       |
|                            |        |                              |
|   GET  /login              |        |   GET  /admin (login page)   |
|   POST /login              |        |   POST /admin/login          |
|   GET  /signup             |        |   GET  /admin/adminUsers     |
|   POST /signup             |        |   GET  /admin/addUser        |
|   GET  /user/userDashboard |        |   POST /admin/addUser        |
|   GET  /logout             |        |   GET  /admin/editUser/:id   |
+------------+---------------+        |   POST /admin/editUser/:id   |
             |                        |   GET  /admin/deleteUser/:id |
             |                        |   GET  /admin/logout         |
             |                        +--------------+---------------+
             |                                       |
             +------------------+--------------------+
                                |
                                v
+-----------------------------------------------------------------------+
|                     MIDDLEWARE (Guards)                               |
|                                                                       |
|   middleware/userAuth.js         middleware/adminAuth.js              |
|   +----------------------+        +---------------------------+       |
|   | Check 1: session OK? |        | Check 1: session OK?     |       |
|   | Check 2: user in DB? |        | Check 2: user in DB?     |       |
|   | -> next() OR         |        | Check 3: role=="admin"?  |       |
|   |    redirect /login   |        | -> next() OR redirect    |       |
|   +----------------------+        +---------------------------+       |
+----------------------------------+------------------------------------+
                                   | next() -> passes control to Controller
                                   v
+-----------------------------------------------------------------------+
|                    CONTROLLER (C) Layer                               |
|                                                                       |
|   controllers/userController.js   controllers/adminController.js     |
|   - Receives: req (request), res (response)                          |
|   - Calls: Service layer for DB operations                           |
|   - Returns: res.render(view, data) or res.redirect(url)             |
+----------+--------------------------------------+---------------------+
           |                                      |
           v                                      v
+---------------------+            +---------------------------------+
|   SERVICE Layer     |            |         MODEL (M) Layer         |
|                     |  queries   |                                 |
|   userService.js    +----------->|   models/userModel.js           |
|   adminService.js   |            |                                 |
|                     |            |   mongoose.Schema({             |
|   findUserByEmail() |            |     name:    { type: String },  |
|   findUserById()    |            |     email:   { unique: true },  |
|   createUser()      |            |     password:{ required: true },|
|   updateUser()      |            |     role:    { default:"user" } |
|   deleteUser()      |            |   })                            |
|   getPaginated...() |            |                                 |
+---------------------+            |   User.findOne()                |
                                   |   User.find().skip().limit()    |
                                   |   new User(data).save()         |
                                   |   User.findByIdAndUpdate()      |
                                   |   User.findByIdAndDelete()      |
                                   +-----------------+---------------+
                                                     |
                                                     v
                                   +---------------------------------+
                                   |       MongoDB Database          |
                                   |   Collection: "users"           |
                                   |                                 |
                                   |   {                             |
                                   |     _id: ObjectId("64abc..."), |
                                   |     name: "Abdul Ahad",         |
                                   |     email: "a@mail.com",        |
                                   |     password: "$2b$12$...",     |
                                   |     role: "user"                |
                                   |   }                             |
                                   +---------------------------------+

           | (Controller gets data back from service/model)
           v
+-----------------------------------------------------------------------+
|                      VIEW (V) Layer                                   |
|                                                                       |
|   views/user/login.hbs          views/admin/login.hbs                |
|   views/user/signup.hbs         views/admin/manageUsers.hbs          |
|   views/user/home.hbs           views/admin/addUser.hbs              |
|                                 views/admin/editUser.hbs             |
|                                                                       |
|   res.render("user/login", { msg, msgClass })                        |
|   -> HBS template engine replaces {{msg}} with actual value          |
|   -> Generates complete HTML and sends to browser                    |
+-----------------------------------------------------------------------+
                                |
                                v
                     BROWSER renders the HTML page
```

---

## 4. Layer-by-Layer Explanation

### Model (M)

> **Definition:** The Model is the **data layer**. It defines the **structure (schema)** of data stored in MongoDB and provides methods to read/write that data. It is the ONLY layer that directly talks to the database.

**File:** `models/userModel.js`

**What it does:**
- Defines what a "User" document looks like in MongoDB
- Enforces validation rules (required fields, unique values, etc.)
- Provides Mongoose model methods to query and save data

**Schema Fields Explained:**

| Field | Type | Rules | Purpose |
|-------|------|-------|---------|
| `name` | String | required, trim | User's full name. `trim` removes extra spaces. |
| `email` | String | required, unique, trim | Login identifier. `unique` prevents duplicate emails. |
| `password` | String | required | Always stored as a bcrypt hash — NEVER plain text! |
| `role` | String | default: "user" | "user" for regular users, "admin" for admin accounts. |

**Key Mongoose Model Methods Used in This Project:**
```js
User.findOne({ email })              // Find 1 document where email matches
User.findById(id)                    // Find 1 document by its MongoDB _id
User.find(query).skip(n).limit(n)   // Get multiple documents with pagination
User.countDocuments(query)           // Count how many documents match
new User(data).save()                // Create a new document and save to DB
User.findByIdAndUpdate(id, data)    // Find by ID and update specific fields
User.findByIdAndDelete(id)          // Find by ID and permanently delete
```

---

### View (V)

> **Definition:** The View is the **presentation layer**. It generates the **HTML** that the user sees in their browser. Views are "dumb" — they ONLY display data passed from the Controller. They never directly query the database.

**Template Engine:** Handlebars (`.hbs`) — HTML with special `{{}}` syntax for dynamic content.

**All View Files:**
```
views/
  user/
    login.hbs       <- User login form page
    signup.hbs      <- User registration form page
    home.hbs        <- User dashboard (protected - only logged-in users)
  admin/
    login.hbs       <- Admin login form page
    manageUsers.hbs <- Full user management: search, table, pagination, edit/delete
    addUser.hbs     <- Admin creates new user form
    editUser.hbs    <- Admin edits existing user (fields pre-filled)
```

**Handlebars Syntax Cheat Sheet:**

| Syntax | What it does | Real example in this project |
|--------|-------------|------------------------------|
| `{{variable}}` | Outputs a variable's value | `{{user.name}}` shows "Abdul Ahad" |
| `{{#if cond}}...{{/if}}` | Only renders if condition is truthy | `{{#if msg}}<h6>{{msg}}</h6>{{/if}}` |
| `{{else}}` | Fallback inside `{{#if}}` | `{{#if x}}A{{else}}B{{/if}}` |
| `{{#unless cond}}...{{/unless}}` | Renders if condition is FALSY | `{{#unless users}}<tr>No users found</tr>{{/unless}}` |
| `{{#each array}}...{{/each}}` | Loops over each item in array | `{{#each users}}<tr>{{this.name}}</tr>{{/each}}` |
| `{{this}}` | Current item inside `{{#each}}` | `{{this.email}}` — the current user's email |
| `{{this._id}}` | Property of current item in loop | Used dynamically in edit/delete URLs |
| `{{!-- comment --}}` | HBS comment (NOT visible in browser HTML) | `{{!-- This is a comment --}}` |

**How Controller sends data to View:**
```js
// In Controller:
res.render("user/home", { user });
//               ^           ^
//               |           |-- data object passed to template
//               |-- folder/filename (looks for views/user/home.hbs)

// In views/user/home.hbs:
<h1>Welcome back, {{user.name}}!</h1>
// Output rendered HTML: <h1>Welcome back, Abdul Ahad!</h1>
```

---

### Controller (C)

> **Definition:** The Controller is the **logic/brain layer**. It receives HTTP requests from Routes, processes them (using Services for DB operations), and sends back a response — either by rendering a View or redirecting to another URL.

**Files:**
- `controllers/userController.js` — handles user login, signup, dashboard, logout
- `controllers/adminController.js` — handles admin login, CRUD on users, pagination, logout

**Complete Controller Method Reference:**

| Controller | Method | HTTP Route | What it does |
|---|---|---|---|
| UserController | `getLogin` | GET /login | Shows login form; handles session flags for error/success messages |
| UserController | `postLogin` | POST /login | Validates email & password; sets session on success |
| UserController | `getDashboard` | GET /user/userDashboard | Fetches user from DB; renders home page with user data |
| UserController | `getSignup` | GET /signup | Shows signup form (redirects if already logged in) |
| UserController | `postSignup` | POST /signup | Validates, hashes password, saves new user, redirects to login |
| UserController | `logout` | GET /logout | Destroys session; redirects to login page |
| AdminController | `getLogin` | GET /admin | Shows admin login form (redirects if already logged in) |
| AdminController | `postLogin` | POST /admin/login | Validates admin credentials; sets admin session |
| AdminController | `getDashboard` | GET /admin/adminDashboard | Redirects to admin users list |
| AdminController | `getUsers` | GET /admin/adminUsers | Shows paginated + searchable user list with serial numbers |
| AdminController | `getAddUser` | GET /admin/addUser | Shows the Add New User form |
| AdminController | `postAddUser` | POST /admin/addUser | Validates email, hashes password, creates user, flash success |
| AdminController | `getEditUser` | GET /admin/editUser/:id | Gets user from DB; renders pre-filled edit form |
| AdminController | `postEditUser` | POST /admin/editUser/:id | Updates name/email; optionally updates password if provided |
| AdminController | `deleteUser` | GET /admin/deleteUser/:id | Permanently deletes user; flash success |
| AdminController | `logout` | GET /admin/logout | Destroys session; clears cookie; redirects to admin login |

**Every controller method uses these key objects:**
```js
async methodName(req, res) {
  // ---- REQUEST object (req) ----
  req.body            // Form data from POST submissions
                      // e.g., req.body.email, req.body.password
  req.params          // Dynamic URL segments (e.g., :id)
                      // e.g., req.params.id = "64abc123"
  req.query           // URL query strings (after ?)
                      // e.g., req.query.page, req.query.search
  req.session         // Persistent session data
                      // e.g., req.session.userLoggedIn
  req.flash("key")    // Read one-time flash message

  // ---- RESPONSE object (res) ----
  res.render("path/view", { data })  // Render HBS template with data
  res.redirect("/url")               // Send browser to different URL
  req.flash("key", "message")        // Set a flash message (before redirect)
}
```

---

### Routes — The Traffic Director

> **Definition:** Routes map incoming HTTP requests (a combination of URL path + HTTP method) to the correct Controller method. They are the **entry points** of the application — the first thing that handles a specific URL.

**Files:**
- `routes/userRoute.js` — mounted at `/` in app.js → handles all user URLs
- `routes/adminRoute.js` — mounted at `/admin` in app.js → handles all admin URLs

**Route Pattern:**
```js
router.METHOD("path", [optionalMiddleware], controllerMethod)

// Examples from this project:

user.get("/login", userController.getLogin);
// -> When browser sends: GET /login
// -> Run: userController.getLogin

user.post("/login", userController.postLogin);
// -> When browser sends: POST /login (form submission)
// -> Run: userController.postLogin

user.get("/user/userDashboard", userAuth, userController.getDashboard);
// -> When browser sends: GET /user/userDashboard
// -> First run: userAuth (check if logged in)
// -> If auth passes, run: userController.getDashboard

admin.get("/editUser/:id", adminAuth, adminController.getEditUser);
// -> When browser sends: GET /admin/editUser/64abc123
// -> :id is dynamic: req.params.id = "64abc123"
// -> First run: adminAuth, then: adminController.getEditUser
```

**HTTP Methods:**

| Method | Used For | How it's triggered |
|--------|---------|-------------------|
| `GET` | Fetching/viewing a page | Typing URL in browser, clicking links |
| `POST` | Submitting/sending data | Clicking a Submit button on a form |

---

### Middleware — The Gatekeeper

> **Definition:** Middleware is a function that runs **between** the Route matching and the Controller executing. It receives `req`, `res`, and a special `next()` function. It can block a request (redirect) or allow it to continue (`next()`).

**Files:**
- `middleware/userAuth.js` — protects user-only routes
- `middleware/adminAuth.js` — protects admin-only routes

**Middleware Function Signature:**
```js
const middlewareName = async (req, res, next) => {
  // Check something...
  if (conditionFails) {
    return res.redirect("/login"); // BLOCK - stop here, never reach controller
  }
  next(); // PASS - allow request to continue to the next handler
};
// IMPORTANT: If next() is never called AND no response is sent,
// the browser will hang forever (loading spinner never stops).
```

**userAuth — What it checks:**
1. `req.session.userLoggedIn` exists? (Is there a logged-in session?)
2. `User.findById(req.session.userLoggedIn)` returns a user? (Does user still exist in DB?)
3. Both checks pass → `next()` → controller runs
4. Either check fails → `res.redirect("/login")` → controller NEVER runs

**adminAuth — What it checks:**
1. `req.session.adminLoggedIn` exists?
2. `User.findById(req.session.adminLoggedIn)` returns someone?
3. That someone has `role === "admin"`?
4. All three pass → `next()` → controller runs
5. Any one fails → `res.redirect("/admin")` → controller NEVER runs

**Why check the database in middleware (not just session)?**
```
Scenario: Admin deletes a user, but that user's session is still active.
- Without DB check: deleted user can still access the dashboard!
- With DB check: User.findById() returns null -> middleware blocks them -> secure!

Same for admin: If someone changes admin's role to "user" in DB,
the DB check catches it immediately even if session still exists.
```

**Built-in Middleware Used in app.js:**

| Middleware | Purpose | Where data goes |
|-----------|---------|----------------|
| `express.static("public")` | Serves CSS/images/JS files directly | Browser |
| `express.urlencoded({ extended: true })` | Parses HTML form submissions | `req.body` |
| `express.json()` | Parses JSON request bodies | `req.body` |
| `session({...})` | Attaches session object to every request | `req.session` |
| `nocache()` | Adds no-cache HTTP response headers | Browser cache |
| `flash()` | Enables flash message read/write | `req.flash()` |

---

### Services — The Database Worker

> **Definition:** The Service layer contains all **database query logic**. It is called by Controllers and uses Models to interact with MongoDB. It keeps Controllers clean by separating "what to do" (Controller) from "how to query the DB" (Service).

**Files:**
- `services/userService.js` — DB operations used by UserController
- `services/adminService.js` — DB operations used by AdminController

**Why have a Service layer?**
```js
// Without service (messy Controller):
async postLogin(req, res) {
  const user = await User.findOne({ email: req.body.email }); // DB in controller
  const count = await User.countDocuments({ role: "user" });  // more DB here...
  // Controller is 200 lines long, hard to read
}

// With service (clean Controller):
async postLogin(req, res) {
  const user = await userService.findUserByEmail(req.body.email); // clean!
  // DB logic is in userService.js, this is easy to read
}
```

**Admin Service — All Methods:**

| Method | MongoDB Operation | Purpose |
|--------|-----------------|---------|
| `findAdminByEmail(email)` | `User.findOne({ email, role:"admin" })` | Find admin for login |
| `getPaginatedUsers(q, skip, limit)` | `User.find({$ne, $or, $regex}).skip().limit()` | Paged + searched list |
| `getTotalUsersCount(q)` | `User.countDocuments({...})` | Total for pagination math |
| `findUserByEmail(email)` | `User.findOne({ email })` | Duplicate check on add |
| `createUser(data)` | `new User(data).save()` | Save new user to DB |
| `findUserById(id)` | `User.findById(id)` | Get user data for edit form |
| `updateUser(id, data)` | `User.findByIdAndUpdate(id, data, {new:true})` | Apply edits to user |
| `deleteUser(id)` | `User.findByIdAndDelete(id)` | Remove user permanently |

**MongoDB Query Operators Explained:**

| Operator | Full Meaning | Example |
|----------|------------|---------|
| `$ne` | "not equal to" | `{ role: { $ne: "admin" } }` — exclude admin users |
| `$or` | "match if ANY of these" | `{ $or: [{name:...}, {email:...}] }` — either name OR email matches |
| `$regex` | "contains this pattern" | `{ name: { $regex: "ab" } }` — name contains "ab" anywhere |
| `$options: "i"` | "case-insensitive" | Makes `$regex` match "AB", "ab", "Ab" the same way |

---

### Config — Infrastructure

> **Definition:** The Config layer holds setup and configuration code that the rest of the app depends on as infrastructure. It doesn't belong to M, V, or C — it's the foundation everything else runs on.

**File:** `config/db.js`

```js
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // MONGO_URI from .env = "mongodb://127.0.0.1:27017/userDB"
    // 127.0.0.1 = localhost | 27017 = default MongoDB port | userDB = database name
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1); // Exit code 1 = error. App cannot run without database.
  }
};
```

---

## 5. Full Request–Response Flow

### Complete walkthrough: User logs in

```
STEP 1:
  User types: http://localhost:3001/login in browser
  Browser sends: GET /login (HTTP request)

STEP 2:
  app.js receives the request
  Middleware stack runs in order:
    -> express.static() — not a file request, skip
    -> express.urlencoded() — no body on GET, skip
    -> session() — attach req.session to this request
    -> nocache() — add no-cache headers to response
    -> flash() — enable req.flash() on this request
    -> res.locals.error = req.flash("error") — make flash available in HBS

STEP 3:
  app.use("/", userRoute) — URL starts with "/" so userRoute handles it

STEP 4:
  user.get("/login", userController.getLogin) — matches GET /login

STEP 5:
  userController.getLogin runs:
    -> req.session.userLoggedIn? NO -> don't redirect to dashboard
    -> req.session.passwordWrong? NO -> no error to show
    -> req.session.signUpSuccess? NO -> no success message
    -> res.render("user/login") — render the login form with no message

STEP 6:
  HBS engine finds views/user/login.hbs
  Replaces {{msg}} with nothing (msg is undefined)
  Sends complete HTML to browser

STEP 7:
  Browser displays the login page with email and password inputs

---

STEP 8:
  User fills in email="a@mail.com", password="mypass"
  Clicks "Login" button
  Browser sends: POST /login
    Body (invisible in URL): email=a%40mail.com&password=mypass

STEP 9:
  express.urlencoded() parses the body:
    req.body = { email: "a@mail.com", password: "mypass" }

STEP 10:
  user.post("/login", userController.postLogin) — matches POST /login
  (No middleware between route and controller for login)

STEP 11:
  userController.postLogin runs:
  a) const { email, password } = req.body
     -> email = "a@mail.com", password = "mypass"

  b) await userService.findUserByEmail("a@mail.com")
     -> userService calls: User.findOne({ email: "a@mail.com" })
     -> MongoDB searches "users" collection
     -> Returns: { _id:"64abc...", name:"Abdul Ahad", email:"a@mail.com",
                   password:"$2b$12$...", role:"user" }

  c) existingUser exists AND role is not "admin" -> continue

  d) await bcrypt.compare("mypass", "$2b$12$...")
     -> Compares plain "mypass" with stored hash
     -> Returns: true (passwords match!)

  e) Passwords match -> continue

  f) req.session.userLoggedIn = "64abc..."
     -> User's MongoDB ID stored in session
     -> This is how server "remembers" the user

  g) res.redirect("/user/userDashboard")
     -> Sends HTTP 302 response to browser
     -> Browser immediately makes new GET /user/userDashboard request

STEP 12:
  user.get("/user/userDashboard", userAuth, userController.getDashboard)
  userAuth middleware runs FIRST:
    -> req.session.userLoggedIn = "64abc..." -> EXISTS -> continue
    -> User.findById("64abc...") -> returns user document -> EXISTS -> continue
    -> next() -> allow access to getDashboard

STEP 13:
  userController.getDashboard runs:
    -> await userService.findUserById("64abc...")
    -> Gets full user: { name: "Abdul Ahad", email: "a@mail.com", ... }
    -> res.render("user/home", { user })

STEP 14:
  HBS engine finds views/user/home.hbs
  Replaces {{user.name}} with "Abdul Ahad"
  Generates complete HTML

STEP 15:
  Browser receives HTML and displays:
  "Welcome back, Abdul Ahad!" with a Logout button
  -> LOGIN COMPLETE!
```

---

## 6. Key Packages Explained

| Package | Version | What it does | How it's used in this project |
|---------|---------|-------------|-------------------------------|
| **express** | ^5.2.1 | Core web framework for Node.js | Creates server, registers routes, handles middleware |
| **mongoose** | ^9.9.2 | MongoDB ODM — makes DB queries easy | Defines schemas, models, performs CRUD operations |
| **hbs** | ^4.2.1 | Handlebars template engine | Renders `.hbs` files with dynamic data using `{{}}` |
| **express-session** | ^1.19.0 | Server-side session management | Stores `userLoggedIn` / `adminLoggedIn` IDs between requests |
| **bcrypt** | ^6.0.0 | Password hashing library | `bcrypt.hash()` to store, `bcrypt.compare()` to verify passwords |
| **connect-flash** | ^0.1.1 | One-time temporary messages | Show "User added successfully" or "Invalid credentials" once after redirect |
| **nocache** | ^4.0.0 | Disables browser page caching | Prevents back-button exploit after logout |
| **dotenv** | ^17.4.2 | Loads `.env` file into `process.env` | Reads MONGO_URI, PORT, ADMIN_EMAIL without hardcoding |
| **nodemon** | ^3.1.14 | Auto-restarts server on file save (dev tool) | `npm start` runs `nodemon app.js` so you don't restart manually |

---

## 7. Session & Authentication Flow

> **What is a Session?**
> HTTP is "stateless" — every request is completely independent. The server has no memory of previous requests. Sessions solve this: the server stores data about you (your user ID) and gives your browser a cookie with a session ID so you can be recognized.

```
DURING LOGIN:
  Server runs: req.session.userLoggedIn = user._id
  -> Session object stored in server memory
  -> Server sends to browser: Set-Cookie: connect.sid=s%3Axyz123
  -> Browser saves this cookie automatically

ON EVERY SUBSEQUENT REQUEST:
  Browser automatically sends: Cookie: connect.sid=s%3Axyz123
  -> Server reads session ID from cookie
  -> Looks up matching session in memory
  -> Attaches it to req.session
  -> Middleware can check: req.session.userLoggedIn

ON LOGOUT:
  req.session.destroy()         -> removes session from server memory
  res.clearCookie("connect.sid") -> tells browser to delete the cookie
  -> Even if browser sends old cookie -> server finds no matching session
  -> User is effectively logged out
```

**Session Configuration Explained (app.js):**
```js
app.use(session({
  secret: "my secret",
  // Signs the session cookie to prevent tampering.
  // In production, use a long random string stored in .env.

  resave: false,
  // Don't save session back to store if it wasn't modified.
  // Better performance — avoids unnecessary write operations.

  saveUninitialized: false,
  // Don't create a session for users who haven't logged in.
  // Saves memory — only logged-in users get a session.
}));
```

---

## 8. How Passwords Are Secured (bcrypt)

> **Rule #1 of web security:** NEVER store plain text passwords in a database.
> If your database is breached, all user passwords would be exposed.
> **bcrypt** is a one-way hashing algorithm that solves this.

**How hashing works:**
```
USER REGISTERS:
  They type:     "mypassword123"
  bcrypt.hash("mypassword123", 12)
                                ^-- salt rounds (complexity)
  Result:        "$2b$12$V8gvBQKYl5e3JuLlXmqe.AbCdEfGhIjKlMnOpQrStUvWxYz"
  Stored in DB:  "$2b$12$V8gvBQKYl5e3JuLlXmqe.AbCdEfGhIjKlMnOpQrStUvWxYz"

  NOTE: Running bcrypt.hash("mypassword123", 12) AGAIN gives a DIFFERENT hash!
  That's because bcrypt adds a random "salt" each time.
  But bcrypt.compare() can verify the correct password against ANY valid hash.

USER LOGS IN:
  They type:     "mypassword123"
  DB has:        "$2b$12$V8gvBQKYl5e3JuLlXmqe..."
  bcrypt.compare("mypassword123", "$2b$12$V8gvBQKYl5e3...")
  -> Result: true  (password is correct!)
  -> Result: false (wrong password)

  The hash CANNOT be reversed/decrypted.
  You can ONLY verify by comparing.
```

**Salt Rounds (second argument to bcrypt.hash):**

| Salt Rounds | Security Level | Time to Hash |
|------------|--------------|-------------|
| 8 | Acceptable | Very fast |
| 10 | Good | Fast |
| **12** | **Better (used here)** | **~300ms — standard** |
| 14 | Excellent | ~1 second |
| 16 | Very strong | ~4 seconds |

**hashPassword.js — How to set up the admin account:**
```
1. Open hashPassword.js and set: const password = "yourAdminPassword";
2. Run in terminal:    node hashPassword.js
3. Output in terminal: Hashed Password: $2b$12$abc...
4. Open MongoDB Compass or Mongosh
5. Insert admin document:
   db.users.insertOne({
     name: "Admin",
     email: "admin",
     password: "$2b$12$abc...",  <- paste the hash here
     role: "admin"
   })
6. Admin account is ready. Log in at http://localhost:3001/admin
```

---

## 9. Flash Messages Explained

> **Flash messages** are temporary "one-time" messages stored in the session. They show up ONCE after a redirect and disappear automatically — even if the user refreshes.

**Complete Flash Message Flow:**
```
1. Controller sets a flash message (before redirect):
   req.flash("error", "User already exists")
   -> connect-flash stores this in req.session

2. Controller redirects:
   res.redirect("/signup")
   -> Browser goes to /signup with a new GET request

3. On the next request (/signup), app.js middleware runs:
   res.locals.error = req.flash("error")
   -> req.flash("error") READS the message from session AND DELETES it
   -> res.locals makes it available in ALL HBS templates automatically

4. In views/user/signup.hbs:
   {{#if error}}
   <h6 class="text-danger text-center">{{error}}</h6>
   {{/if}}
   -> The message "User already exists" is displayed

5. User sees the message
   If they refresh the page -> req.flash("error") returns [] (empty)
   -> res.locals.error is [] -> {{#if error}} is false -> message gone!
   -> Shown exactly once, as intended
```

**Flash Types in This Project:**

| Flash Key | Set When | Example Message |
|-----------|---------|----------------|
| `"error"` | An operation fails | "User already exists", "Invalid email or password", "Passwords do not match" |
| `"success"` | An operation succeeds | "User added successfully", "User updated successfully", "User deleted successfully" |

**Where flash messages appear in HBS templates:**
```hbs
{{!-- In manageUsers.hbs (success and error both shown) --}}
{{#if success}}
<div class="alert alert-success">{{success}}</div>
{{/if}}

{{#if error}}
<div class="alert alert-danger">{{error}}</div>
{{/if}}
```

---

## 10. Pagination & Search Logic

> The admin user list supports **pagination** (split into pages of 7 users) and **search** (filter users by name or email in real time).

**How pagination URLs work:**
```
Page 1:  GET /admin/adminUsers
Page 2:  GET /admin/adminUsers?page=2
Search:  GET /admin/adminUsers?search=Abdul
Both:    GET /admin/adminUsers?page=2&search=Abdul
```

**Step-by-step calculation in adminController.getUsers:**
```js
const page  = parseInt(req.query.page) || 1;     // "2" -> 2, missing -> 1
const limit = parseInt(req.query.limit) || 7;    // default: 7 per page
const skip  = (page - 1) * limit;               // Page 2: (2-1)*7 = 7

// skip = how many to jump over (the users already shown on previous pages)
// Page 1: skip 0   (show users 1-7)
// Page 2: skip 7   (show users 8-14)
// Page 3: skip 14  (show users 15-21)
```

**The MongoDB query with search:**
```js
const query = {
  role: { $ne: "admin" },   // Exclude all admin accounts
  $or: [
    { name:  { $regex: searchQuery, $options: "i" } },  // name contains text
    { email: { $regex: searchQuery, $options: "i" } }   // OR email contains text
  ]
};

User.find(query)
    .skip(skip)    // Skip already-shown users
    .limit(limit)  // Return only 7
```

**Pagination math:**
```js
const totalUsers = await adminService.getTotalUsersCount(searchQuery);
// e.g., 15 users match the search

const totalPages = Math.ceil(totalUsers / limit);
// Math.ceil(15 / 7) = Math.ceil(2.14) = 3 pages

previousPage: page > 1 ? page - 1 : null
// Page 2 -> previousPage = 1
// Page 1 -> previousPage = null (disable "Previous" button)

nextPage: page < totalPages ? page + 1 : null
// Page 2, totalPages 3 -> nextPage = 3
// Page 3 -> nextPage = null (disable "Next" button)
```

**Keeping search query while paginating (manageUsers.hbs):**
```hbs
href="/admin/adminUsers?page={{nextPage}}{{#if searchQuery}}&search={{searchQuery}}{{/if}}"

Result when searching "Abdul" and going to page 2:
-> /admin/adminUsers?page=2&search=Abdul
   (search is preserved when clicking Next/Previous!)
```

---

## 11. Project Folder Structure

```
Full Domain/
|
+-- app.js                    <- ENTRY POINT. Server + middleware + routes setup.
+-- .env                      <- Secret config (MONGO_URI, PORT). Never commit to Git!
+-- package.json              <- Project metadata, npm package list, scripts
+-- hashPassword.js           <- One-time utility: generates bcrypt hash for admin setup
+-- summary.md                <- This file: complete project documentation
|
+-- config/
|   +-- db.js                 <- MongoDB connection. Called once in app.js at startup.
|
+-- models/                   <- [M] in MVC. Database schemas and models.
|   +-- userModel.js          <- Defines User: name, email, password, role
|
+-- views/                    <- [V] in MVC. HTML templates (Handlebars .hbs files).
|   +-- user/
|   |   +-- login.hbs         <- User login form (GET /login)
|   |   +-- signup.hbs        <- User registration form (GET /signup)
|   |   +-- home.hbs          <- User dashboard - shows name, logout button
|   +-- admin/
|       +-- login.hbs         <- Admin login form (GET /admin)
|       +-- manageUsers.hbs   <- Full user management page with table, search, pagination
|       +-- addUser.hbs       <- Admin creates new user
|       +-- editUser.hbs      <- Admin edits existing user (fields pre-filled)
|
+-- controllers/              <- [C] in MVC. Request/response logic handlers.
|   +-- userController.js     <- getLogin, postLogin, getDashboard, getSignup, postSignup, logout
|   +-- adminController.js    <- getLogin, postLogin, getUsers, getAddUser, postAddUser,
|                                 getEditUser, postEditUser, deleteUser, logout
|
+-- routes/                   <- URL-to-Controller mapping. The traffic directors.
|   +-- userRoute.js          <- Mounted at "/" -> /login, /signup, /user/dashboard, /logout
|   +-- adminRoute.js         <- Mounted at "/admin" -> /admin, /adminUsers, /addUser, etc.
|
+-- middleware/               <- Guard functions. Run between routes and controllers.
|   +-- userAuth.js           <- Checks session + DB before allowing dashboard access
|   +-- adminAuth.js          <- Checks session + DB + role before allowing admin pages
|
+-- services/                 <- Database query layer. Called by controllers.
|   +-- userService.js        <- findUserByEmail, findUserById, createUser
|   +-- adminService.js       <- findAdminByEmail, getPaginatedUsers, getTotalUsersCount,
|                                 findUserByEmail, createUser, findUserById, updateUser, deleteUser
|
+-- public/                   <- Static files served directly. CSS, images, client JS.
|   +-- (stylesheets, images) <- Referenced in HBS as: href="/style.css"
|
+-- node_modules/             <- All installed npm packages. DO NOT edit. DO NOT commit.
```

---

## 12. All Files — Commented Reference Table

> Every file in this project has been documented with **detailed beginner-friendly comments**
> explaining what each line does, why it exists, and how it connects to the MVC layers.

| # | File | MVC Role | Key Concepts Documented |
|---|------|----------|------------------------|
| 1 | [app.js](./app.js) | Server Bootstrap | `require()`, `express()`, every middleware explained line by line, `app.use()`, `app.listen()`, session config, flash setup, nocache, static files, view engine setup, cache-control headers |
| 2 | [.env](./.env) | Configuration | What `.env` is and why it exists, never hardcode secrets, `process.env`, MongoDB URI format breakdown (host:port/dbname), PORT fallback |
| 3 | [config/db.js](./config/db.js) | DB Layer | `mongoose` ODM, `async/await` explained, `mongoose.connect()`, error handling with `try/catch`, `process.exit(1)` meaning, `module.exports` |
| 4 | [models/userModel.js](./models/userModel.js) | **Model (M)** | `mongoose.Schema` vs model, each field's `type`/`required`/`unique`/`trim`/`default`, why passwords must be hashed, `mongoose.model()` creates the collection, all CRUD method signatures |
| 5 | [routes/userRoute.js](./routes/userRoute.js) | Router | `express.Router()`, GET vs POST difference, route protection pattern with middleware, how routes are mounted in app.js, `module.exports` |
| 6 | [routes/adminRoute.js](./routes/adminRoute.js) | Router | Same as above + `:id` dynamic route parameters explained with examples, adminAuth applied to every protected route |
| 7 | [controllers/userController.js](./controllers/userController.js) | **Controller (C)** | `req.body` destructuring, `req.session` read/write, `res.render()` vs `res.redirect()`, `req.flash()`, `bcrypt.compare()` and `bcrypt.hash()` with 12 rounds, class-based controller pattern, `module.exports = new UserController()` |
| 8 | [controllers/adminController.js](./controllers/adminController.js) | **Controller (C)** | Pagination math (`skip`, `limit`, `Math.ceil`), `req.params.id`, `req.query.page/search`, `parseInt()`, `.map()` with index, `.toObject()`, full CRUD flow, `res.clearCookie("connect.sid")`, optional password update |
| 9 | [middleware/userAuth.js](./middleware/userAuth.js) | Middleware | `next()` function purpose, what happens without `next()`, session check, DB verification with `User.findById()`, why both checks are needed, `session.destroy()` callback |
| 10 | [middleware/adminAuth.js](./middleware/adminAuth.js) | Middleware | Three-step admin verification, `role !== "admin"` check, why role check protects against privilege changes, middleware vs controller |
| 11 | [services/userService.js](./services/userService.js) | Service Layer | WHY service layer exists (Controller separation), `User.findOne({email})`, `User.findById(id)`, `new User(userData).save()`, Singleton pattern with `module.exports = new UserService()` |
| 12 | [services/adminService.js](./services/adminService.js) | Service Layer | `$ne` operator, `$or` operator, `$regex` + `$options:"i"` for case-insensitive search, `.skip()` + `.limit()` for pagination, `countDocuments()`, `findByIdAndUpdate()` with `{new:true}`, `findByIdAndDelete()` |
| 13 | [hashPassword.js](./hashPassword.js) | Utility Script | `bcrypt.hash()` with salt rounds, why this script exists (admin can't sign up via form), how to use it to set up admin account, what "salt" means |
| 14 | [views/user/login.hbs](./views/user/login.hbs) | **View (V)** | HBS comment syntax `{{!--}}`, `{{#if msg}}` conditional, `{{msg}}` and `{{msgClass}}` variables, every Bootstrap class explained (d-flex, vh-100, card, btn, etc.), Font Awesome icons, form `action` + `method` attributes, `name` attribute -> `req.body` |
| 15 | [views/user/signup.hbs](./views/user/signup.hbs) | **View (V)** | All form fields with name attributes, `type="email"` vs `type="text"`, `required` attribute (browser validation), flash error display with `{{#if error}}`, back arrow absolute positioning with Bootstrap |
| 16 | [views/user/home.hbs](./views/user/home.hbs) | **View (V)** | `{{user.name}}` dynamic content insertion, Bootstrap navbar structure, responsive grid system (`col-md-8`, `col-md-4`), Bootstrap utility classes explained, logout link |
| 17 | [views/admin/login.hbs](./views/admin/login.hbs) | **View (V)** | Admin theme (blue `bg-primary` vs user green `bg-success`), `{{msg}}` variable output, form POST to `/admin/login`, same Bootstrap pattern |
| 18 | [views/admin/manageUsers.hbs](./views/admin/manageUsers.hbs) | **View (V)** | `{{#each users}}` loop, `{{this.name}}` / `{{this._id}}` inside loop, `{{#unless users}}` empty state, flash success+error at top, search form with GET method, `value="{{searchQuery}}"` to preserve search text, `onclick="return confirm()"` for delete, full pagination with `{{#if previousPage/nextPage}}`, keeping search in pagination URLs |
| 19 | [views/admin/addUser.hbs](./views/admin/addUser.hbs) | **View (V)** | Admin add-user form, note about bcrypt hashing in controller, `{{#if error}}` flash error display, back arrow navigation |
| 20 | [views/admin/editUser.hbs](./views/admin/editUser.hbs) | **View (V)** | Pre-filled inputs with `value="{{user.name}}"` / `value="{{user.email}}"`, dynamic form `action="/admin/editUser/{{user._id}}"`, password field intentionally blank (optional update), `btn-info` cyan theme |

---

## 13. Common Beginner Questions

### What is `module.exports`?
```js
// In db.js:
module.exports = connectDB;

// What it means:
// When another file does: const connectDB = require("./config/db")
// It gets the connectDB function.
// Without module.exports, the function stays private to db.js.
// It's like "making something public" in other languages.
```

### What is `require()`?
```js
const express = require("express");
// Loads an npm package (installed via npm install).

const connectDB = require("./config/db");
// Loads YOUR OWN file (relative path with ./ or ../).

// Similar to: import express from 'express' (ES6 syntax)
// Similar to: import flask in Python
```

### What is `async/await`?
```js
// Without async/await (callbacks - messy):
User.findById(id, function(err, user) {
  User.findOne({ email }, function(err2, other) {
    // "callback hell"
  });
});

// With async/await (clean):
async function getUser() {
  const user = await User.findById(id);
  // 'await' pauses execution until MongoDB responds
  // Then user = the actual document (not a Promise)
  const other = await User.findOne({ email });
  // Reads top-to-bottom, easy to understand
}
```

### What is `req.body`?
```
When a user submits this HTML form:
  <form method="post" action="/login">
    <input name="email" value="test@mail.com">
    <input name="password" value="mypassword">
  </form>

Browser sends: POST /login with body: email=test%40mail.com&password=mypassword

express.urlencoded() in app.js PARSES this body.
Result: req.body = { email: "test@mail.com", password: "mypassword" }

In controller: const { email, password } = req.body;
```

### What is `req.params` vs `req.query`?
```
Route defined as: admin.get("/editUser/:id", ...)
URL accessed:     /admin/editUser/64abc123?page=2&search=Abdul

req.params.id       -> "64abc123"  <- from :id in route definition
req.query.page      -> "2"         <- from ?page=2 in URL
req.query.search    -> "Abdul"     <- from &search=Abdul in URL
req.query.limit     -> undefined   <- not in URL, use || default
```

### What does `next()` do in middleware?
```js
// Middleware is like a checkpoint:
const userAuth = async (req, res, next) => {
  if (!req.session.userLoggedIn) {
    return res.redirect("/login"); // STOP - user not allowed through
    // next() is NOT called, controller never runs
  }
  next(); // PASS - move to next handler (controller)
  // Without calling next() here, the browser would hang forever
  // (loading spinner never stops - server never sends a response)
};
```

### What is the difference between `res.render()` and `res.redirect()`?
```
res.render("user/login", { msg: "Hello" });
  -> Express finds views/user/login.hbs
  -> Handlebars replaces {{msg}} with "Hello"
  -> Sends complete HTML document to browser (HTTP 200)
  -> Browser URL stays: http://localhost:3001/login
  -> No new request is made

res.redirect("/login");
  -> Sends HTTP 302 (Found/Redirect) to browser
  -> Browser automatically makes a NEW GET /login request
  -> Browser URL changes to: http://localhost:3001/login
  -> This is why you see the URL flash/change after form submissions
```

### Why use a Service layer? Can the DB code just go in Controllers?
```
YES technically you can. But SHOULD you? No.

Problem without services:
  - userController.postLogin needs: User.findOne({ email })
  - adminController.postLogin also needs: User.findOne({ email })
  - You copy-paste the same code in two places
  - Later if you need to add a check (e.g., isActive), you update TWO places
  - Bugs appear when you update one but forget the other

Solution with services:
  - userService.findUserByEmail(email) -> one place
  - Both controllers call this same function
  - Update once -> both controllers get the fix automatically
  - Also: Controllers become short and readable (50 lines vs 200)
```

### What is a `class` and why use it?
```js
class UserController {
  getLogin(req, res) { /* ... */ }
  postLogin(req, res) { /* ... */ }
  logout(req, res) { /* ... */ }
}

module.exports = new UserController();
// Creates ONE instance of the class
// All methods are available on it: userController.getLogin

// Alternative (exporting plain object):
module.exports = {
  getLogin: (req, res) => { /* ... */ },
  postLogin: (req, res) => { /* ... */ },
};
// Both work the same way - class version is more organized
```

---

> **Final Summary:**
>
> This project follows a clean MVC + Service architecture. Every layer has one responsibility:
>
> ```
> Browser
>    |
>    v
> Route      -> Matches URL to handler
>    |
>    v
> Middleware -> Guards (are you allowed in?)
>    |
>    v
> Controller -> Logic (what should happen?)
>    |
>    v
> Service    -> Database (how to query?)
>    |
>    v
> Model      -> Schema (what does data look like?)
>    |
>    v
> MongoDB    -> Storage (where data lives)
>    |
>    v (data returned up the chain)
>    |
> Controller -> Picks the right View
>    |
>    v
> View (HBS) -> Generates HTML with dynamic data
>    |
>    v
> Browser    -> Renders the final page
> ```
>
> Each layer only talks to the layer directly above or below it.
> This separation is what makes the code clean, maintainable, and beginner-friendly.
