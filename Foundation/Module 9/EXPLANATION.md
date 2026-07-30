# 📖 Express.js – Beginner's Guide to `app.js`

A plain-English explanation of every method, middleware, and pattern used in this project.

---

## Table of Contents

1. [What is Express?](#1-what-is-express)
2. [`require()` – Importing packages](#2-require--importing-packages)
3. [`express()` – Creating the app](#3-express--creating-the-app)
4. [`app.set()` – App configuration](#4-appset--app-configuration)
5. [`app.use()` – Registering middleware](#5-appuse--registering-middleware)
6. [`express.urlencoded()` – Parsing form data](#6-expressurlencoded--parsing-form-data)
7. [`session()` – Keeping users logged in](#7-session--keeping-users-logged-in)
8. [`nocache()` – Disabling browser cache](#8-nocache--disabling-browser-cache)
9. [Routes – `app.get()` and `app.post()`](#9-routes--appget-and-apppost)
10. [`res.render()` – Sending an HTML page](#10-resrender--sending-an-html-page)
11. [`res.redirect()` – Sending the user elsewhere](#11-resredirect--sending-the-user-elsewhere)
12. [`req.body` – Reading form data](#12-reqbody--reading-form-data)
13. [`req.session` – Reading/writing session data](#13-reqsession--readingwriting-session-data)
14. [`req.session.destroy()` – Logging out](#14-reqsessiondestroy--logging-out)
15. [`app.listen()` – Starting the server](#15-applisten--starting-the-server)
16. [Glossary](#16-glossary)

---

## 1. What is Express?

Express is a **minimal web framework** for Node.js.  
It makes it easy to:
- Define **routes** (what happens when a user visits a URL)
- Use **middleware** (functions that process requests before your routes run)
- Send back **HTML pages, JSON data, or redirects**

```js
const express = require("express");
const app = express();
```

Think of `app` as your entire web server — all routes and settings go on it.

---

## 2. `require()` – Importing packages

```js
const express = require("express");
const hbs     = require("hbs");
const session = require("express-session");
const nocache = require("nocache");
```

`require()` is Node's built-in way to **load a package** installed via `npm`.  
It returns whatever that package exports (usually an object or a function).

| Package | What it does |
|---|---|
| `express` | Web framework — creates routes and handles HTTP |
| `hbs` | Handlebars – lets you write HTML templates with `{{variables}}` |
| `express-session` | Stores user-specific data between requests (login state, etc.) |
| `nocache` | Adds HTTP headers to stop the browser caching pages |

---

## 3. `express()` – Creating the app

```js
const app = express();
```

Calling `express()` creates a **new application instance**.  
This `app` object is what you configure routes and middleware on.  
Think of it as the "brain" of your web server.

---

## 4. `app.set()` – App configuration

```js
app.set("view engine", "hbs");
```

`app.set(key, value)` stores a **setting** on the app object.

| Key | Value | What it means |
|---|---|---|
| `"view engine"` | `"hbs"` | Use Handlebars to render `.hbs` template files |
| `"views"` | `"./views"` | (default) folder where Express looks for template files |

When you call `res.render("loginHome")`, Express will look for `views/loginHome.hbs`
and turn it into full HTML before sending it to the browser.

---

## 5. `app.use()` – Registering middleware

```js
app.use( someMiddleware() );
```

### What is middleware?

Imagine every HTTP request as a package traveling through a series of checkpoints.  
**Middleware** is a checkpoint — a function that receives the request, does something with it, and either:
- **Passes it on** to the next function (via `next()`), or
- **Ends the cycle** by sending a response

```
Browser Request
      │
      ▼
 [Middleware 1]  ← e.g. parse form data
      │
      ▼
 [Middleware 2]  ← e.g. check session
      │
      ▼
 [Route Handler] ← your app.get() / app.post()
      │
      ▼
Browser Response
```

`app.use()` registers middleware that runs on **every** request (unless a path is specified).

---

## 6. `express.urlencoded()` – Parsing form data

```js
app.use(
  express.urlencoded({
    extended: true,
  }),
);
```

### Why do we need this?

When an HTML `<form>` is submitted with `method="POST"`, the browser encodes the data like this:

```
username=admin&password=root
```

This is called **URL-encoded** format.  
Without this middleware, `req.body` would be `undefined` — you'd have no way to read the form data.

### What does it do?

It **automatically parses** that encoded string and turns it into a JavaScript object:

```js
req.body = {
  username: "admin",
  password: "root"
}
```

### The `extended` option

| Value | Meaning |
|---|---|
| `extended: true` | Uses the `qs` library — can handle nested objects like `user[name]=John` |
| `extended: false` | Uses the built-in `querystring` library — only handles flat key/value pairs |

For most beginner projects, either works. `true` is safer for complex forms.

---

## 7. `session()` – Keeping users logged in

```js
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
  }),
);
```

### The problem sessions solve

HTTP is **stateless** — the server has no memory between requests.  
Every time you load a page, the server treats you as a brand-new visitor.

Sessions solve this by storing a small **session ID** in a cookie in the browser.  
On every request, the browser sends that cookie back, and the server uses the ID
to look up data it has saved about that user.

### Options explained

| Option | Value | Explanation |
|---|---|---|
| `secret` | `"my secret"` | A private key used to **sign** the session cookie so it can't be tampered with. Use a long, random string in production! |
| `resave` | `false` | Don't re-save the session to the store if nothing changed. Reduces unnecessary writes. |
| `saveUninitialized` | `true` | Automatically save a new, empty session even before any data is stored. |

### Using the session

```js
// Save data into the session
req.session.loggedIn = true;

// Read data from the session
if (req.session.loggedIn) { /* ... */ }

// Delete the session (logout)
req.session.destroy(() => { /* ... */ });
```

---

## 8. `nocache()` – Disabling browser cache

```js
app.use(nocache());
```

### Why is this needed?

Browsers **cache** (save a copy of) pages to load them faster on the next visit.  
This is a problem for protected pages:

1. User logs in → visits `/dashboard`
2. User logs out → browser shows the login page
3. User presses the browser **Back** button
4. ⚠️ Without `nocache()`, the browser shows the **cached** dashboard!

`nocache()` adds HTTP headers that instruct the browser:

```
Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
Pragma: no-cache
Expires: 0
```

This forces the browser to always fetch a fresh copy from the server.

---

## 9. Routes – `app.get()` and `app.post()`

Routes define **what your server does** when a specific URL is visited.

### Syntax

```js
app.METHOD("/path", (req, res) => {
  // your code here
});
```

### HTTP Methods

| Method | When it's used | Example |
|---|---|---|
| `GET` | Requesting/viewing a page | Opening a URL in the browser |
| `POST` | Submitting data to the server | Submitting a login form |
| `PUT` | Updating an existing resource | Editing a profile |
| `DELETE` | Deleting a resource | Removing a post |

### Routes in this project

```js
app.get("/", ...)           // User visits the home/login page
app.post("/verify", ...)    // Login form is submitted
app.get("/dashboard", ...)  // User visits the dashboard
app.post("/logout", ...)    // Logout form is submitted
```

### The callback parameters

```js
(req, res) => { ... }
```

| Parameter | Full name | What it contains |
|---|---|---|
| `req` | Request | Everything the browser sent: URL, form data, cookies, session, headers... |
| `res` | Response | Methods to send something back: HTML, JSON, a redirect... |

---

## 10. `res.render()` – Sending an HTML page

```js
res.render("loginHome");
res.render("loginHome", { msg: "Error: Invalid Credentials" });
```

`res.render(templateName, data)` tells Express to:
1. Find `views/loginHome.hbs`
2. Inject any `data` you provide into the template
3. Convert the template to full HTML
4. Send that HTML to the browser

### Passing data to the template

```js
// In app.js
res.render("loginHome", { msg: "Error: Invalid Credentials" });
```

```html
<!-- In views/loginHome.hbs -->
{{#if msg}}
  <p class="error">{{ msg }}</p>
{{/if}}
```

The `{{ msg }}` syntax is Handlebars — it outputs the value of `msg` into the HTML.

---

## 11. `res.redirect()` – Sending the user elsewhere

```js
res.redirect("/dashboard");
res.redirect("/");
```

`res.redirect(url)` sends the browser to a **different URL**.  
Internally it sends an HTTP `302` status code, which the browser understands as "go here instead."

Used in this project:
- After successful login → redirect to `/dashboard`
- After logout → redirect to `/` (login page)
- If already logged in and visiting `/` → redirect to `/dashboard`

---

## 12. `req.body` – Reading form data

```js
req.body.username
req.body.password
```

`req.body` is an object that contains **form data** submitted via POST.  
It is populated by the `express.urlencoded()` middleware (see section 6).

For example, if your login form looks like this:

```html
<form method="POST" action="/verify">
  <input type="text"     name="username" />
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form>
```

Then `req.body` will be:

```js
{ username: "admin", password: "root" }
```

The `name` attribute on each `<input>` becomes the **key** in `req.body`.

---

## 13. `req.session` – Reading/writing session data

```js
req.session.loggedIn = true;   // write
if (req.session.loggedIn) { }  // read
```

After the `session()` middleware is set up, every request gets a `req.session` object.  
You can store **any data** on it and it will persist across requests for that user.

In this project:
- `req.session.loggedIn = true` → stored when user logs in successfully
- `if (req.session.loggedIn)` → checked on every protected route

---

## 14. `req.session.destroy()` – Logging out

```js
req.session.destroy(() => {
  res.redirect("/");
});
```

`destroy()` completely **deletes the session** from the server.  
The callback function runs after the session has been removed.  
We redirect the user to `/` (the login page) inside the callback to make sure
the redirect only happens after the session is gone.

---

## 15. `app.listen()` – Starting the server

```js
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

`app.listen(port, callback)` starts the HTTP server and begins listening for requests.

| Part | Explanation |
|---|---|
| `PORT` | The port number your server runs on. Visit `http://localhost:3001` in the browser. |
| `callback` | A function that runs once the server has started. Used to log a confirmation message. |

Common port numbers used in development: `3000`, `3001`, `8080`, `8000`.

---

## 16. Glossary

| Term | Definition |
|---|---|
| **HTTP** | HyperText Transfer Protocol – the language browsers and servers use to communicate |
| **Request** | A message sent FROM the browser TO the server |
| **Response** | A message sent FROM the server BACK to the browser |
| **Middleware** | A function that processes a request before it reaches your route handler |
| **Route** | A rule that maps a URL + HTTP method to a function |
| **Session** | Server-side storage that persists data across multiple requests for one user |
| **Cookie** | A small piece of data stored in the browser, sent with every request |
| **Template engine** | Converts `.hbs` files (HTML + variables) into plain HTML |
| **URL-encoded** | A format for encoding form data: `key=value&key2=value2` |
| **Cache** | A copy of a page stored by the browser to avoid re-downloading it |
| **Port** | A numbered channel on your computer. `3001` means only traffic intended for port 3001 reaches your app |

---

> 💡 **Tip for beginners:** Read the code top-to-bottom. Express runs in the same order — packages load first, then middleware runs on every request, then the matching route handler fires.
