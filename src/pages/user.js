import React from 'react';
import { useNavigate } from 'react-router-dom'
import Heading from '../components/heading';

import {useState} from "react";

function User(props){
    console.log(props);
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Navigate to the admin page
        navigate('/admin');
      };

      const [name, setName]= useState('');
      const [surname, setLastName]= useState('');
      const [email, setEmail]= useState('');
      const [cell, setCell]= useState('');
      const [position, setPosition]= useState('');
      const [department, setDepartment]= useState('');
      const [image, setImage]= useState('');

      const add= (()=>{
        props.add(name, surname, email, cell, position, department, image);

        localStorage.setItem('EmployeeList', JSON.stringify(add));

        console.log(add);
      })


    return(
        <div class="wrapper"> 
            <button onClick={handleSubmit} class="switchBtn">Switch to Admin</button>
            <div class="infoBox">
            <div class="box1">
            <h1>User Page</h1>
            <input value={name} type="text" placeholder="Enter name" onChange={(event)=> setName(event.target.value)} />
            <br/>
            <input value={surname} type="text" placeholder="Enter surname" onChange={(event)=> setLastName(event.target.value)}/>
            <br/>
            <input value={email} type="text" placeholder="Enter email address" onChange={(event)=> setEmail(event.target.value)}/>
            <br/>
            <input value={cell} type="number" placeholder="Cell number" onChange={(event)=> setCell(event.target.value)}/>
            <br/>
            <input value={position} type="text" placeholder="Position" onChange={(event)=> setPosition(event.target.value)}/>
            <br/>
            <input value={department} type="text" placeholder="Enter department" onChange={(event)=> setDepartment(event.target.value)}/>
            <br/>
            <div class="hero">
                <div class="card">
                    <img src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"/>
                    <input type="file" accept="image/JPEG, image/png, image/jpg" id="input-file"/>
                    <label for="input-file" id="update-img" value={image} onChange={(event)=> setImage(event.target.value)}>Update</label>
                </div>
            </div>
            <button onClick={add} id="submit-btn">Submit</button>
            </div>
            <div class="box2">
            <img src="/media/4115334.jpg" alt="illustration of an employee portal"/>
            </div>
            </div>
            
            </div>
    );
}

export default User;
