import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/heading';

function User() {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    const addEmployee = (ev) => {
        ev.preventDefault();
        let employee = {
            name: ev.target.form.name.value,
            surname: ev.target.form.surname.value,
            email: ev.target.form.email.value,
            cell: ev.target.form.cell.value,
            position: ev.target.form.position.value,
            department: ev.target.form.department.value,
        }

        setEmployees([...employees, employee]);
        console.warn('added', { employees: [...employees, employee] });

        ev.target.form.reset();
    };

    const handleSwitchToAdmin = () => {
        navigate('/admin');

        localStorage.setEmployees('EmployeeList', JSON.stringify(employees));
    };

    return (
        <div className="wrapper">
            <button onClick={handleSwitchToAdmin} className="switchBtn">Switch to Admin</button>
            <div className="infoBox">
                <h1>User Page</h1>
                <div className="box1">
                    <form>
                        <input type="text" id="name" placeholder="Enter name" />
                        <br />
                        <input type="text" id="surname" placeholder="Enter surname" />
                        <br />
                        <input type="text" id="email" placeholder="Enter email address" />
                        <br />
                        <input type="number" id="cell" placeholder="Cell number" />
                        <br />
                        <input type="text" id="position" placeholder="Position" />
                        <br />
                        <input type="text" id="department" placeholder="Enter department" />
                        <br />
                        <div className="hero">
                            <div className="card">
                                <img src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1" alt="User" />
                                <input type="file" accept="image/JPEG, image/png, image/jpg" id="input-file" />
                                <label htmlFor="input-file" id="update-img">Update</label>
                            </div>
                        </div>
                        <button type="button" id="submit-btn" onClick={addEmployee}>Submit</button>
                    </form>
                </div>
                <div className="box2">
                    <img src="/media/4115334.jpg" alt="illustration of an employee portal" />
                </div>
            </div>
        </div>
    );
}

export default User;
 


