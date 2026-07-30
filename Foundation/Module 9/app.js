// ============================================================
//  app.js  –  Main entry point of the Express application
// ============================================================

// ------------------------------------------------------------------
// 1. IMPORTING PACKAGES
//    "require()" loads an installed npm package so we can use it here.
// ------------------------------------------------------------------

const express = require("express"); // Express: the web-server framework
const hbs = require("hbs");         // hbs: Handlebars template engine (for HTML views)
const session = require("express-session"); // express-session: stores login state between requests
const nocache = require("nocache"); // nocache: tells the browser NOT to cache protected pages

// ------------------------------------------------------------------
// 2. CREATING THE APP
//    express() returns an application object.  Everything else is
//    configured on this object.
// ------------------------------------------------------------------

const app = express();

// ------------------------------------------------------------------
// 3. SETTING THE VIEW ENGINE
//    app.set() stores a configuration value.
//    Here we tell Express to use Handlebars (.hbs) files as HTML templates.
//    Express will look for views inside the /views folder by default.
// ------------------------------------------------------------------

app.set("view engine", "hbs");

// ------------------------------------------------------------------
// 4. MIDDLEWARE  –  What is middleware?
//    Middleware is a function that runs between the incoming request
//    and your final route handler.  app.use() registers middleware.
// ------------------------------------------------------------------

// 4a. express.urlencoded()
//     When an HTML <form> is submitted, the browser sends data in a
//     format called "URL-encoded" (e.g.  username=admin&password=root).
//     This middleware parses that data and makes it available as
//     req.body inside your route handlers.
//
//     { extended: true }  means it can also handle nested/complex
//     objects in the form data (uses the "qs" library internally).
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// 4b. session()
//     HTTP is "stateless" – each request is independent.  Sessions
//     let us remember things about a user across multiple requests
//     (e.g. "is this user logged in?").
//
//     Options explained:
//       secret          – A private key used to sign/encrypt the session cookie.
//                         Change this to a long random string in a real project!
//       resave          – false  → don't re-save the session if nothing changed.
//       saveUninitialized – true → save a new, empty session automatically.
app.use(
  session({
    secret: "my secret",       // ⚠️  Use a strong, secret value in production
    resave: false,
    saveUninitialized: true,
  }),
);

// 4c. nocache()
//     Adds HTTP headers that tell the browser never to cache the page.
//     This is important for protected pages so a user cannot press
//     the "Back" button after logging out and see the old page.
app.use(nocache());

// ------------------------------------------------------------------
// 5. HARDCODED CREDENTIALS  (for demo purposes only)
//    In a real application you would store hashed passwords in a database.
// ------------------------------------------------------------------

const username = "admin";
const password = "root";

// ------------------------------------------------------------------
// 6. ROUTES
//    A route listens for a specific HTTP method + URL path.
//    Syntax: app.<method>("<path>", callback)
//
//    req  = request object  (data sent FROM the browser)
//    res  = response object (data sent BACK to the browser)
// ------------------------------------------------------------------

// GET /
//   The browser opens "/" when the user visits the site root.
//   If already logged in  → redirect to the dashboard.
//   If not logged in      → show the login page.
app.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard"); // send the browser to a different URL
  } else {
    res.render("loginHome");    // render views/loginHome.hbs
  }
});

// POST /verify
//   The login form submits here.
//   We check the username + password from req.body (parsed by urlencoded middleware).
//   If correct  → mark the session as logged in and redirect to dashboard.
//   If wrong    → re-render the login page with an error message.
app.post("/verify", (req, res) => {
  if (req.body.username === username && req.body.password === password) {
    req.session.loggedIn = true;      // store login state in the session
    res.redirect("/dashboard");
  } else {
    res.render("loginHome", { msg: "Error: Invalid Credentials" });
    //                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //  The second argument passes data INTO the template.
    //  In loginHome.hbs you can display it with  {{msg}}
  }
});

// GET /dashboard
//   Only accessible when logged in.
//   If the session says the user is logged in → show dashboard.
//   Otherwise                                → redirect back to login.
app.get("/dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard"); // render views/dashboard.hbs
  } else {
    res.render("loginHome");
  }
});

// POST /logout
//   Destroys the session (removes login state) and redirects to home.
//   req.session.destroy() accepts a callback that runs after the
//   session has been deleted.
app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/"); // send user back to the login page
  });
});

// ------------------------------------------------------------------
// 7. STARTING THE SERVER
//    app.listen() starts the server on the given port.
//    Visit http://localhost:3001 in your browser to see the app.
// ------------------------------------------------------------------

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
