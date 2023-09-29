import React from 'react';

const ShowUser = ({fName, lName, email, currentGrade}) => {

    return(
        <div>
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>Email: {email}</p>
            <p>Current Grade: {currentGrade}</p>
        </div>
    );
}

export default ShowUser;