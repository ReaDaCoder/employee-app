import React, { useContext } from 'react';
import Heading from '../components/heading';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../components/context/EmployeeContext';

export default function Portal() {
    const navigate = useNavigate();
    const { employees } = useContext(EmployeeContext);

    const handleSubmit = () => {
        navigate('/user');
    };

    return (
        <div className="container">
            <Heading />
            <button onClick={handleSubmit} className="switchBtn">Switch to User</button>
            <h1>User Management</h1>
            <input type="text" placeholder="Search User" className="searchUserInput" />
            <button className="searchUser">Search User</button>
            <div className="grid">
                <div className="box3">
                    <h2>Name</h2>
                    <ul>
                        {employees.map((employee, index) => (
                            <li key={index}>{employee.name} {employee.surname}</li>
                        ))}
                    </ul>
                </div>
                <div className="box4">
                    <h2>Roles</h2>
                    <ul>
                        {employees.map((employee, index) => (
                            <li key={index}>{employee.position}</li>
                        ))}
                    </ul>
                </div>
                <div className="box5">
                    <h2>Actions</h2>
                    <ul>
                        {employees.map((employee, index) => (
                            <li key={index}>
                                {/* Add actions here, e.g., Edit, Delete */}
                                <button>Edit</button>
                                <button>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="workers"></div>
            </div>
        </div>
    );
}





/*import React, { useState } from 'react';
import Heading from '../components/heading';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeContext'


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

}*/
