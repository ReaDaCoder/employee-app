import React from 'react';
import { useNavigate } from 'react-router-dom'
import Heading from '../components/heading';

function User(){
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Navigate to the admin page
        navigate('/admin');
      };


    return(
        <div class="wrapper">
            <div class="box1">
            <h1>User Page</h1>
            <input type="text" placeholder="Enter name"/>
            <br/>
            <input type="text" placeholder="Enter surname"/>
            <br/>
            <input type="text" placeholder="Enter email address"/>
            <br/>
            <input type="text" placeholder="Cell number"/>
            <br/>
            <input type="text" placeholder="Position"/>
            <br/>
            <input type="text" placeholder="Enter department"/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            </div>
            <div class="box2">
            <img src="/media/4115334.jpg" alt="illustration of an employee portal"/>
            </div>
            </div>
    );
}

export default User;
