import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        toast.error("All fields are required");

        return;
      }
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8081/api/auth/login",
        {
          email,
          password,
        },
      );

      localStorage.setItem("token", response.data);

      toast.success("Login Successful");

      console.log(response.data);

      navigate("/products");
      setLoading(false);
    } catch (error) {
      console.error(error);

      toast.error("Invalid Credentials");
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>AI Ecommerce Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <p className="mt-5">
        Don't have account?
        <Link to="/register" className="text-blue-400 ml-2">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
