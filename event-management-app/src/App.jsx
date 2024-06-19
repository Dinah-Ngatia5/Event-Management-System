import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <Router>
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/find-events" element={<EventList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
