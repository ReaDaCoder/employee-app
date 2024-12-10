import './App.css';
import LoginPage from './pages/loginPage';
import User from './pages/user';
import Portal from './pages/admin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegistrationPage from './pages/registrationPage';
import { AuthProvider } from '../src/Auth';
import ProtectedRoute from '../src/ProtectedRoute';
import Auth from '../src/Auth'; 


export default function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/registrationPage" element={<RegistrationPage />} />
          <Route exact path="/user" element={<ProtectedRoute  />} />
          <Route path="/admin" element={<Portal />} />
        </Routes>
     </Router>
      </AuthProvider>
    </div>
  );
}
