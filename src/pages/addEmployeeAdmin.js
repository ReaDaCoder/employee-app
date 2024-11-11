import React, { useEffect, useState } from 'react';


export default function addEployeeAdmin(){
    return(
        <div>
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
    )
}