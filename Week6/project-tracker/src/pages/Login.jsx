import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("user@example.com"); // update auth state
    navigate("/dashboard");     // navigate after login
  };
  

  return <button onClick={handleLogin}>Login</button>;
};
export default Login;