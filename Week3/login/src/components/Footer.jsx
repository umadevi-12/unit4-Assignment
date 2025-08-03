import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer style={{ background: "#f2f2f2", padding: "1px" }}>
      <p>{isLoggedIn ? "Welcome, User" : "Please log in"}</p>
    </footer>
  );
}

export default Footer;
