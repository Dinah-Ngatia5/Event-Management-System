// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn state to Navbar */}
        <div className="content">
          <Routes>
            <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/event-list" element={<EventList />} />
            <Route path="/event-details/:id" element={<EventDetails />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
