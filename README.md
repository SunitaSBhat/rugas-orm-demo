<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Order Management App - README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 30px;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }
    code {
      background-color: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background-color: #eee;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>🛒 Order Management Application</h1>
  <p>A full-stack Order Management System built using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) that allows users to manage orders efficiently with secure authentication and robust features.</p>

  <h2>🚀 Features</h2>

  <h3>🔐 Authentication</h3>
  <ul>
    <li>User registration and login</li>
    <li>Password hashing using <code>bcrypt</code></li>
    <li>JWT-based secure authentication</li>
  </ul>

  <h3>🎯 Frontend</h3>
  <ul>
    <li>Built with <code>React.js</code></li>
    <li><code>Redux</code> for global state management</li>
    <li><code>React Router</code> for page navigation</li>
    <li><code>useState</code>/<code>useEffect</code> hooks for component logic</li>
  </ul>

  <h3>🛠 Backend</h3>
  <ul>
    <li><code>Node.js</code> with <code>Express.js</code> to create RESTful APIs</li>
    <li>Clean code structure with controllers, routes, and middleware</li>
    <li>Token-based protected routes</li>
  </ul>

  <h3>🗃 Database</h3>
  <ul>
    <li><code>MongoDB</code> with <code>Mongoose</code></li>
    <li>Defined models and schemas for Users and Orders</li>
    <li>Secure data handling and storage</li>
  </ul>

 
  <h2>⚙️ Installation & Setup</h2>

  <h3>1. Clone the repository</h3>
  <pre><code>git clone repo name</code></pre>

  <h3>2. Set up the Backend</h3>
  <pre><code>cd backend
npm install</code></pre>

  <p>Create a <code>.env</code> file inside the <code>backend/</code> directory and add:</p>
  <pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key</code></pre>

  <p>Run the backend:</p>
  <pre><code>npm run dev</code></pre>

  <h3>3. Set up the Frontend</h3>
  <pre><code>cd ../frontend
npm install
npm start</code></pre>

  <h2>🛡 Security Practices</h2>
  <ul>
    <li>Passwords hashed using <code>bcrypt</code></li>
    <li>Authentication using <code>JWT</code></li>
    <li>Secure storage of user and order data</li>
  </ul>

  <h2>✅ Future Enhancements</h2>
  <ul>
    <li>Role-based access (admin, customer)</li>
    <li>Order filtering and sorting</li>
    <li>Pagination support</li>
    <li>Deployment on cloud platforms</li>
  </ul>

  <h2>🧑‍💻 Author</h2>
  <p><strong>Sunita</strong><br>
  Full Stack Developer | MERN Stack | Cloud Enthusiast<br>
  <a href="https://www.linkedin.com/in/sunita-bhat-55a13123a/" target="_blank">LinkedIn</a> • 
 
</body>
</html>
