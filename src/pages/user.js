import React from 'react';
import { useNavigate } from 'react-router-dom'
import Heading from '../components/heading';

function User(){
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Navigate to the admin page
        navigate('/admin');
      };

      const [name, setName]= useState('');
      const [surname, setLastName]= useState('');
      const [email, setEmail]= useState('');
      const [cell, setCell]= useStae('');
      const [position, setPosition]= useState('');
      const [department, setDepartment]= useState('');

      const add= (()=>{
        props.add(name, surname, email, cell, position, department);
      })


    return(
        <div class="wrapper"> 
            <button onClick={handleSubmit}>Switch to Admin</button>
            <div class="box1">
            <h1>User Page</h1>
            <input type="text" placeholder="Enter name" onChange={(event)=> setName(event.target.value)} />
            <br/>
            <input type="text" placeholder="Enter surname" onChange={(event)=> setLastName(event.target.value)}/>
            <br/>
            <input type="text" placeholder="Enter email address" onChange={(event)=> setEmail(event.target.value)}/>
            <br/>
            <input type="text" placeholder="Cell number" onChange={(event)=> setCell(event.target.value)}/>
            <br/>
            <input type="text" placeholder="Position" onChange={(event)=> setPosition(event.target.value)}/>
            <br/>
            <input type="text" placeholder="Enter department" onChange={(event)=> setDepartment(event.target.value)}/>
            <br/>
            <button onClick={add}>Submit</button>
            </div>
            <div class="box2">
            <img src="/media/4115334.jpg" alt="illustration of an employee portal"/>
            </div>
            </div>
    );
}

export default User;
