import React from "react";

function ListRedender() {
    const employeeList = [
        {
            id: 1,
            name: 'selva',
            designation: 'Architect',
            skill: 'Full Stack'
        },
        {
            id: 2,
            name: 'Danu',
            designation: 'Senior Associate',
            skill: 'QA'
        },
        {
            id: 3,
            name: 'James',
            designation: 'Lead Associate',
            skill: 'TDM'
        }
    ];
    const emplist = employeeList.map(empl => (<tr><td>{empl.id}</td>
        <td>{empl.name}</td><td>{empl.designation}</td><td>{empl.skill}</td></tr>))
    //console.log(emplist)
    return (

        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>SKILL</th>
            </tr>
            {emplist}
        </table>
    )
}


export default ListRedender