<<<<<<< Updated upstream

import './App.css'

function App() {
 

  return (
    <>
     <h1>Event management app</h1> 
    </>
  )
}
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import { AuthProvider } from './AuthContext';


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

const Home = () => (
    <div>
        <h1>Home</h1>
        <p>Welcome to the Event Management System!</p>
    </div>
);
>>>>>>> Stashed changes

export default App;
