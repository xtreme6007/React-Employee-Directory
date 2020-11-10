import React from "react"


function EmployeeCard({name, image, email, phone}) {

return(
    <div>

<img
src={image}
alt="Profile Pic"

/>
<p>Name: {name}</p>
<p>Email: {email}</p>
<p>Phone Number: {phone}</p>

    </div>
)





}

export default EmployeeCard