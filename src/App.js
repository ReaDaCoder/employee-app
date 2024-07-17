import logo from './logo.svg';
import './App.css';
import User from './pages/user';
import Portal from './pages/admin';
import useState from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App() {

  const [submit, setSubmit]= useState([]);
  const add =(name, surname, email, cell, position, department) => {
    setSubmit ((submit)=>[...submit, {name:name, surname:surname, email:email, cell:cell, position:position, department:department}])

    console.log();
  }


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

