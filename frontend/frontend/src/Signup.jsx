import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const categoryOptions = ["Technology", "Sports", "Health", "Business"];

    const handleCategoryChange = (category) => {
        setCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/signup", { name, email, password, categories });
            alert(res.data.message);
            navigate("/");
        } catch (err) {
            alert(err.response.data.error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-400">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <div className="mb-4">
                        <label className="font-semibold text-gray-700">Select Categories:</label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {categoryOptions.map((category, idx) => (
                                <label key={idx} className="flex items-center bg-gray-100 p-2 rounded-lg shadow-sm">
                                    <input type="checkbox" className="mr-2 accent-blue-500"
                                        checked={categories.includes(category)}
                                        onChange={() => handleCategoryChange(category)} />
                                    {category}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-md transition duration-300">Sign Up</button>
                </form>
                <p className="text-center mt-4 text-gray-600">Already have an account? <a href="/" className="text-blue-500 font-semibold hover:underline">Login</a></p>
            </div>
        </div>
    );
};

export default Signup;
