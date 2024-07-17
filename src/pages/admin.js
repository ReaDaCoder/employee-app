import React from 'react';
import Heading from '../components/heading';


export default function Portal (){
    return(
        <div className="container">
            <Heading/>
            <h1>User Management</h1>
          <div className="grid">
            <div class="box3">
                <h2>Name</h2>
                </div>
            <div class="box4">
                <h2>Roles</h2>
            </div>
            <div class="box5">
                <h2>Actions</h2>
            </div>
          </div>

        </div>
    );
}
