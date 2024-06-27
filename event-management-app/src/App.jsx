import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'; 

import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              {/* Route to redirect from '/' to '/login' */}
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} /> {/* Route for SignupForm */}
              <Route path="/event-list" element={<EventList />} />
              <Route path="/event-details/:id" element={<EventDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
