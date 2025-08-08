import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CountryList from "./pages/CountryList";
import PrivateRoute from "./routes/PrivateRoute";

export default function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Login</Link> |{" "}
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/countries">Countries</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/countries" element={<CountryList />} />
        </Route>
      </Routes>
    </Router>
  );
}
