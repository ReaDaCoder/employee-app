import React, { useState } from 'react';
import Heading from '../components/heading';
import { useNavigate } from 'react-router-dom';


export default function Portal (props){
        const navigate = useNavigate();
    
        const handleSubmit = () => {
            navigate('/user');
        }



    return(
        <div className="container">
            <Heading/>
            <button onClick={handleSubmit} class="switchBtn">Switch to User</button>
            <h1>User Management</h1>
            <input type="text" placeholder="Search User" class="searchUserInput"/>
            <button class="searchUser">Search User</button>
          <div className="grid">
            <div class="box3">
                <h2>Name</h2>
                <ul></ul>
                </div>
            <div class="box4">
                <h2>Roles</h2>
                <ul></ul>
            </div>
            <div class="box5">
                <h2>Actions</h2>
                <ul></ul>
            </div>
            <div class="workers"></div>
          </div>

        </div>
    );

}
