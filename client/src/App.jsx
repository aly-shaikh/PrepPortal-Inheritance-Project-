import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Welcome to PrepPortal</h1>

      {page === "login" && (
        <Login users={users} setLoggedInUser={setLoggedInUser} setPage={setPage} />
      )}

      {page === "signup" && (
        <Signup users={users} setUsers={setUsers} setPage={setPage} />
      )}

      {page === "signup-success" && (
        <SignupSuccess setPage={setPage} />
      )}

      {page === "dashboard" && (
        <Dashboard user={loggedInUser} setPage={setPage} />
      )}
    </div>
  );
}

/* ---------------- LOGIN ---------------- */

function Login({ users, setLoggedInUser, setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setLoggedInUser(user);
      setPage("dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.card}>
      <h2>Student Login</h2>

      <input
        placeholder="Username"
        style={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={styles.error}>{error}</p>}

      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>

      <p style={styles.text}>
        Don’t have an account?{" "}
        <span style={styles.link} onClick={() => setPage("signup")}>
          Sign up
        </span>
      </p>
    </div>
  );
}

/* ---------------- SIGNUP ---------------- */

function Signup({ users, setUsers, setPage }) {
  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    username: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    setUsers([...users, form]);
    setPage("signup-success");
  };

  return (
    <div style={styles.card}>
      <h2>Create Account</h2>

      <input name="name" placeholder="Full Name" style={styles.input} onChange={handleChange} />
      <input name="rollNo" placeholder="Roll Number" style={styles.input} onChange={handleChange} />
      <input name="username" placeholder="Username" style={styles.input} onChange={handleChange} />
      <input name="email" placeholder="Email" style={styles.input} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" style={styles.input} onChange={handleChange} />

      <select name="role" style={styles.input} onChange={handleChange}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <button style={styles.button} onClick={handleSignup}>
        Sign Up
      </button>

      <p style={styles.text}>
        Already have an account?{" "}
        <span style={styles.link} onClick={() => setPage("login")}>
          Login
        </span>
      </p>
    </div>
  );
}

/* ---------------- SIGNUP SUCCESS ---------------- */

function SignupSuccess({ setPage }) {
  return (
    <div style={styles.card}>
      <h2>🎉 Account Created!</h2>
      <p style={{ margin: "15px 0" }}>
        Your account has been created successfully.
      </p>

      <button style={styles.button} onClick={() => setPage("login")}>
        Back to Login
      </button>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */

function Dashboard({ user, setPage }) {
  return (
    <div style={styles.card}>
      <h2>Welcome, {user?.name}</h2>
      <p><b>Role:</b> {user?.role}</p>
      <p><b>Email:</b> {user?.email}</p>
      <p><b>Placement Status:</b> Not Placed</p>

      <button style={{ ...styles.button, marginTop: "15px" }} onClick={() => setPage("login")}>
        Logout
      </button>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f2f2f2",
  },
  heading: {
    marginBottom: "20px",
  },
  card: {
    width: "320px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "6px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    color: "blue",
    cursor: "pointer",
  },
  text: {
    marginTop: "10px",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default App;





