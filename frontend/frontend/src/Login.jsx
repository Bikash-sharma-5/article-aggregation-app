import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/login", { email, password });
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setUser(res.data.user);
            navigate("/dashboard");
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-300 to-blue-400">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded-lg shadow-md transition duration-300">Login</button>
                </form>
                <p className="text-center mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-green-500 font-semibold hover:underline">Sign Up</a></p>
            </div>
        </div>
    );
};

export default Login;
