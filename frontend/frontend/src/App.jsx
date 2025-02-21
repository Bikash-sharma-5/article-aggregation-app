import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) setUser(JSON.parse(loggedInUser));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
