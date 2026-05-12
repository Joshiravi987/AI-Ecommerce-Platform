import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleRegister = async () => {

        try {

            if (!name || !email || !password) {

    toast.error("All fields are required");

    return;
}
    
            setLoading(true);
            await axios.post(
                "http://localhost:8081/api/auth/register",
                {
                    name,
                    email,
                    password
                    
                }
            );

            toast.success("Registration Successful");

            navigate("/");

        } catch (error) {
            setLoading(false);

            console.error(error);

            toast.error("Registration Failed");
        }
    };

    return (

        <div className="min-h-screen bg-gray-950 flex justify-center items-center">

            <div className="bg-gray-900 p-10 rounded-xl shadow-lg w-96">

                <h1 className="text-3xl text-blue-400 font-bold mb-6">
                    Register
                </h1>

                <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
                    onChange={(e) => setPassword(e.target.value)}
                />

              <button
    onClick={handleRegister}
    disabled={loading}
    className="bg-blue-500 hover:bg-blue-600 w-full py-3 rounded-lg"
>

    {
        loading
            ? "Registering..."
            : "Register"
    }

</button>

                <p className="mt-5 text-gray-400">

                    Already have account?

                    <Link
                        to="/"
                        className="text-blue-400 ml-2"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;