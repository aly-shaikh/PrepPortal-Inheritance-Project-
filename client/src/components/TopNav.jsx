
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/placements">Placements</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default TopNav;

