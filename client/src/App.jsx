import { useState } from "react";
import axios from "axios";

function App() {
  const [page, setPage] = useState("login");
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Welcome to PrepPortal</h1>

      {page === "login" && (
        <Login setLoggedInUser={setLoggedInUser} setPage={setPage} />
      )}

      {page === "signup" && (
        <Signup setPage={setPage} />
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

/* ---------------- LOGIN (Clean & Connected) ---------------- */

function Login({ setLoggedInUser, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email: email,
        password: password
      });

      setLoggedInUser(res.data.user);
      setPage("dashboard");

    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div style={styles.card}>
      <h2>Student Login</h2>

      <input
        type="email"
        placeholder="Email" 
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

/* ---------------- SIGNUP (Clean & Connected) ---------------- */

function Signup({ setPage }) {
  // Removed RollNo, Username, and Role from state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password
      });
      
      setPage("signup-success");

    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div style={styles.card}>
      <h2>Create Account</h2>

      {/* Only fields that exist in DB */}
      <input name="name" placeholder="Full Name" style={styles.input} onChange={handleChange} />
      <input name="email" placeholder="Email" style={styles.input} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" style={styles.input} onChange={handleChange} />

      {error && <p style={styles.error}>{error}</p>}

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
        Your account has been saved to the Database.
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
      <p><b>Email:</b> {user?.email}</p>
      {/* Removed Role display since we aren't saving it yet */}
      <p><b>ID:</b> {user?.id}</p>
      <p><b>Placement Status:</b> Not Placed</p>

      <button style={{ ...styles.button, marginTop: "15px" }} onClick={() => setPage("login")}>
        Logout
      </button>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: { minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#f2f2f2" },
  heading: { marginBottom: "20px" },
  card: { width: "320px", background: "#fff", padding: "20px", borderRadius: "8px", textAlign: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  input: { width: "100%", padding: "8px", margin: "6px 0", boxSizing: "border-box" },
  button: { width: "100%", padding: "10px", marginTop: "10px", background: "#111", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
  link: { color: "blue", cursor: "pointer" },
  text: { marginTop: "10px", fontSize: "14px" },
  error: { color: "red", fontSize: "14px", marginTop: "5px" },
};

export default App;