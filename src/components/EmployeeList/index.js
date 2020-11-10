import React from "react"
import EmployeeCard from "./EmployeeContainer"


function EmployeeList({people}) {
return (
    people.map(employee => (

        <EmployeeCard 
        
        image={employee.image}
        name={employee.name}
        phone={employee.phone}
        email={employee.email}
        />



    ))


    
)





}

export default EmployeeList



