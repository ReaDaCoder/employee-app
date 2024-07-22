import logo from './logo.svg';
import './App.css';
import User from './pages/user';
import Portal from './pages/admin';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeProvider } from './components/context/EmployeeContext';



export default function App() {



  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route index element={<User />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Portal />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}
