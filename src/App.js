import logo from './logo.svg';
import './App.css';
import User from './pages/user';
import Portal from './pages/admin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



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
