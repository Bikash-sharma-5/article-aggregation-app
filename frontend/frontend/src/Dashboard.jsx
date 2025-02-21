import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ user, setUser }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (user && user._id) {
            axios.get(`http://localhost:8000/api/articles/${user._id}`)
                .then(res => {
                    console.log("Articles fetched:", res.data);
                    setArticles(res.data);
                })
                .catch(err => console.error("Error fetching articles:", err));
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Latest Articles</h1>
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300">
                        Logout
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <a key={index} href={article.link} target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                                    <p className="text-gray-700 text-sm">{article.summary}</p>
                                </div>
                            </a>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center col-span-3">No articles found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
