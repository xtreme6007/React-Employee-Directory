import React from "react";


function EmployeeCard(props) {

    


    return (
        <div>

            <img
                src={props.image}
                alt="Profile Pic"

            />
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Phone Number: {props.phone}</p>

        </div>
    )





}

export default EmployeeCard