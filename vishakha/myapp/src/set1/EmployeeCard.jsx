import React from "react";

const EmployeeCard = ({ name, designation, workExperience}) => (
    <div>
        <div style={{color:'green'}}><strong>Name:</strong>{name}</div>
        <div style={{color:'blue'}}><strong>Designation:</strong> {designation}</div>
        <div><strong>workExperience:</strong>{workExperience}</div>
    </div>
)
export default EmployeeCard;