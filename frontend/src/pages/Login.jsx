import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const response = await axios.post(
                "http://localhost:8081/api/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem("token", response.data);

            alert("Login Successful");

            console.log(response.data);

        } catch (error) {

            console.error(error);

            alert("Login Failed");
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

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;