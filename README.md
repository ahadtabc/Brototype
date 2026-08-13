# Building "Full Domain" Project from Scratch

This guide outlines the step-by-step process of building this Express MVC (Model-View-Controller) application from scratch. It explains the order in which folders and files are typically created and the reason for each component's existence.

## Step 1: Project Initialization & Configuration

1. **`package.json`**
   - **Reason:** The heart of any Node.js project. It keeps track of project metadata, scripts (like `"start": "nodemon server.js"`), and all the dependencies (packages) the project needs to run.
   - **How to create:** Run `npm init -y` in the terminal.
2. **`.env`**
   - **Reason:** Stores sensitive configuration data like `MONGO_URI`, `PORT`, and `SESSION_SECRET`. Keeping this out of the source code ensures security, especially when pushing to GitHub.
3. **`server.js`** (or `app.js`)
   - **Reason:** The main entry point of the application. It initializes the Express server, configures middlewares (like body-parsing, sessions, static files), connects to the database, and mounts the routers.

## Step 2: Database Setup

4. **`config/`** (Folder)
   - **Reason:** Groups configuration files separately from the main application logic.
5. **`config/db.js`**
   - **Reason:** Contains the code to connect to MongoDB using Mongoose. Keeping it in a separate file keeps `server.js` clean and focused on server configuration.

## Step 3: Data Layer (Models)

6. **`models/`** (Folder)
   - **Reason:** Holds the Mongoose schemas that define the structure of the data in your MongoDB database.
7. **`models/userModel.js`** & **`models/adminModel.js`**
   - **Reason:** Defines what a "User" and an "Admin" look like in the database (e.g., they must have an email, password, timestamps). This enforces data validation before saving to the database.

## Step 4: Business Logic (Services)

8. **`services/`** (Folder)
   - **Reason:** A design pattern used to separate direct database calls from the controller. This makes the code more reusable and easier to test.
9. **`services/userService.js`** & **`services/adminService.js`**
   - **Reason:** Contains the actual Mongoose queries (e.g., `User.findOne()`, `Admin.create()`). The controllers call these services instead of talking directly to the models.

## Step 5: Application Logic (Controllers)

10. **`controllers/`** (Folder)
    - **Reason:** Contains the logic that connects the user's HTTP request to the backend data and determines what response to send back.
11. **`controllers/userController.js`** & **`controllers/adminController.js`**
    - **Reason:** These files define functions like `getLogin`, `postLogin`, `getDashboard`. They extract data from `req.body`, call the appropriate service to process the data, and then use `res.render()` or `res.redirect()` to send the response.

## Step 6: Security & Middleware

12. **`middleware/`** (Folder)
    - **Reason:** Contains functions that run *before* a request reaches the controller. Useful for checking permissions or modifying requests.
13. **`middleware/adminAuth.js`**
    - **Reason:** Protects admin routes. It checks if `req.session.adminLoggedIn` exists. If not, it kicks the user back to the login page, preventing unauthorized access to the admin dashboard.

## Step 7: Routing

14. **`routes/`** (Folder)
    - **Reason:** Maps specific URL paths (like `/login` or `/admin/dashboard`) to the controller functions that should handle them.
15. **`routes/userRoute.js`** & **`routes/adminRoute.js`**
    - **Reason:** Groups related routes together. For example, `adminRoute.js` handles everything under `/admin`. It acts as a traffic cop, directing incoming requests to the right controller function and applying middleware (like `adminAuth`) to protected routes.

## Step 8: Frontend (Views)

16. **`views/`** (Folder)
    - **Reason:** Holds all the Handlebars (`.hbs`) HTML templates that the user will actually see in their browser.
17. **`views/user/`** & **`views/admin/`** (Folders)
    - **Reason:** Separates the frontend templates for regular users (login, signup, home) from the templates for administrators (admin login, manage users, edit user).

## Step 9: Helper Scripts

18. **`admin/`** (Folder) & **`admin/createAdmin.js`**
    - **Reason:** Standalone utility scripts. `createAdmin.js` is run manually from the terminal to create the very first admin account, bypassing the web UI.

---

### Summary of Request Flow:
When a user visits a page, the flow through these files is:
`server.js` -> `routes/` -> `middleware/` (optional) -> `controllers/` -> `services/` -> `models/` -> Database -> `controllers/` -> `views/` -> User's Browser
